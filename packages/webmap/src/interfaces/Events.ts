/**
 * @module webmap
 */

import { WebMap } from '../WebMap';
import { MapAdapter, MapClickEvent } from './MapAdapter';
import { LayerAdapter, OnLayerClickOptions } from './LayerAdapter';

export interface WebMapEvents {
  'build-map': MapAdapter;
  'create': WebMap;

  'click': MapClickEvent;
  'zoomstart': MapAdapter;
  'zoom': MapAdapter;
  'zoomend': MapAdapter;
  'movestart': MapAdapter;
  'move': MapAdapter;
  'moveend': MapAdapter;

  'layer:pre-add': LayerAdapter;
  'layer:add': LayerAdapter;

  'layer:pre-remove': LayerAdapter;
  'layer:remove': LayerAdapter;

  'layer:pre-show': LayerAdapter;
  'layer:show': LayerAdapter;

  'layer:pre-hide': LayerAdapter;
  'layer:hide': LayerAdapter;

  'layer:click': OnLayerClickOptions;
}
