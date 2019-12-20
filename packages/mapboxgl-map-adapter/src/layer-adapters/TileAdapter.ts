/**
 * @module mapboxgl-map-adapter
 */
import { BaseLayerAdapter, TileAdapterOptions } from '@nextgis/webmap';
import { BaseAdapter } from './BaseAdapter';
import { RasterSource, ResourceType } from 'mapbox-gl';

export class TileAdapter extends BaseAdapter<TileAdapterOptions>
  implements BaseLayerAdapter {
  addLayer(options: TileAdapterOptions): string[] {
    options = { ...this.options, ...(options || {}) };

    let tiles: string[];
    if (options && options.subdomains) {
      tiles = options.subdomains.split('').map(x => {
        const subUrl = options.url.replace('{s}', x);
        return subUrl;
      });
    } else {
      tiles = [options.url];
    }
    if (options.headers) {
      // @ts-ignore
      const transformRequests = this.map.transformRequests;
      transformRequests.push((url: string, resourceType: ResourceType) => {
        let staticUrl = url;
        staticUrl = staticUrl.replace(/(z=\d+)/, 'z={z}');
        staticUrl = staticUrl.replace(/(x=\d+)/, 'x={x}');
        staticUrl = staticUrl.replace(/(y=\d+)/, 'y={y}');
        if (staticUrl === options.url) {
          return {
            url,
            headers: options.headers
          };
        }
      });
    }

    const sourceOptions: RasterSource = {
      type: 'raster',
      // point to our third-party tiles. Note that some examples
      // show a "url" property. This only applies to tilesets with
      // corresponding TileJSON (such as mapbox tiles).
      tiles,
      tileSize: 256 // opt && opt.tileSize ||
    };
    if (options.attribution) {
      sourceOptions.attribution = options.attribution;
    }

    this.map.addLayer(
      {
        id: this._layerId,
        type: 'raster',
        layout: {
          visibility: 'none'
        },
        minzoom:
          this.options.minZoom !== undefined
            ? this.options.minZoom - 1
            : undefined,
        maxzoom:
          this.options.maxZoom !== undefined
            ? this.options.maxZoom - 1
            : undefined,
        source: sourceOptions
        // TODO: clean remove before options from all existing apps
      },
      // @ts-ignore
      options.before
    );
    const layer = (this.layer = [this._layerId]);
    return layer;
  }
}
