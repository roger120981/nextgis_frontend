import { MvtAdapter } from './layer-adapters/MvtAdapter';
import { NavigationControl, Map } from 'mapbox-gl';
import { OsmAdapter } from './layer-adapters/OsmAdapter';
import { TileAdapter } from './layer-adapters/TileAdapter';
import { EventEmitter } from 'events';

type positions = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export class MapboxglAdapter { // implements MapAdapter {

  static layerAdapters = {
    TILE: TileAdapter,
    MVT: MvtAdapter,
    OSM: OsmAdapter
  };

  static controlAdapters = {
    ZOOM: NavigationControl
  };

  options: any;

  displayProjection = 'EPSG:3857';
  lonlatProjection = 'EPSG:4326';

  map: Map;

  emitter = new EventEmitter();

  _layers = {};

  private DPI = 1000 / 39.37 / 0.28;
  private IPM = 39.37;
  private isLoaded = false;


  // create(options: MapOptions = {target: 'map'}) {
  create(options) {
    if (!this.map) {
      this.options = options;
      this.map = new Map({
        container: options.target,
        center: [96, 63], // initial map center in [lon, lat]
        zoom: 2,
        style: {
          version: 8,
          name: 'Empty style',
          sources: {},
          layers: [],
        }
      });
      this._addEventsListeners();
    }
  }

  getContainer() {
    return this.map.getContainer();
  }

  setCenter(latLng: [number, number]) {
    // ignore
  }

  setZoom(zoom: number) {
    // ignore
  }

  fit(extent) {
    // ignore
  }

  setRotation(angle: number) {
    // ignore
  }

  getLayerAdapter(name: string) {
    return MapboxglAdapter.layerAdapters[name];
  }

  showLayer(layerName: string) {
    this.onMapLoad(() => this.toggleLayer(layerName, true));
  }

  hideLayer(layerName: string) {
    this.onMapLoad(() => this.toggleLayer(layerName, false));
  }

  addLayer(adapterDef, options?) {
    return this.onMapLoad(() => {
      let adapterEngine;
      if (typeof adapterDef === 'string') {
        adapterEngine = this.getLayerAdapter(adapterDef);
      }
      if (adapterEngine) {
        const adapter = new adapterEngine(this.map, options);
        const layerId = adapter.name;
        this._layers[layerId] = false;
        return adapter;
      }
    });
  }

  removeLayer(layerName: string) {
    // this._toggleLayer(false, layerName);
  }

  // TODO: rename hasLayer; move to WebMap
  getLayer(layerName: string) {
    return this._layers[layerName] !== undefined;
  }

  // TODO: move to WebMap
  isLayerOnTheMap(layerName: string): boolean {
    return this._layers[layerName];
  }
  // TODO: move to WebMap
  getLayers(): string[] {
    return Object.keys(this._layers);
  }

  setLayerOpacity(layerName: string, opacity: number) {
    this.onMapLoad().then(() => this.map.setPaintProperty(layerName, 'fill-opacity', opacity));
  }

  getScaleForResolution(res, mpu) {
    return parseFloat(res) * (mpu * this.IPM * this.DPI);
  }

  getResolutionForScale(scale, mpu) {
    return parseFloat(scale) / (mpu * this.IPM * this.DPI);
  }

  onMapLoad(cb?) {
    return new Promise((resolve) => {
      if (this.isLoaded) { // map.loaded()
        resolve(cb && cb());
      } else {
        this.map.once('load', () => {
          this.isLoaded = true;
          resolve(cb && cb());
        });
      }
    });
  }

  toggleLayer(layerId, status) {
    this.onMapLoad().then(() => {
      const exist = this._layers[layerId];

      if (exist !== undefined && exist !== status) {
        this.map.setLayoutProperty(layerId, 'visibility', status ? 'visible' : 'none');
        this._layers[layerId] = status;
      }
    });
  }

  addControl(controlDef, position: positions) {
    let control;
    if (typeof controlDef === 'string') {
      const engine = MapboxglAdapter.controlAdapters[controlDef];
      if (engine) {
        control = new engine();
      }
    } else {
      control = controlDef;
    }
    if (control) {
      this.map.addControl(control, position);
    }
  }

  private _addEventsListeners() {
    this.map.on('data', (data) => {
      if (data.dataType === 'source') {
        const isLoaded = data.isSourceLoaded;
        if (isLoaded) {
          this.emitter.emit('data-loaded', { target: data.sourceId });
        }
      }
    });
  }
}
