import CancelablePromise from '@nextgis/cancelable-promise';
import { BaseProvider } from './providers/BaseProvider';
import { GeocoderOptions } from './GeocoderOptions';
import { BaseGeocoder } from './BaseGeocoder';
import { SearchItem } from './types/SearchItem';

import type { LngLatArray } from '@nextgis/utils';

let ID = 0;

export class Geocoder extends BaseGeocoder<GeocoderOptions> {
  providers: BaseProvider[] = [];

  constructor(options: GeocoderOptions) {
    super(options);
    if (options && options.providers) {
      this.providers = options.providers;
    }
  }

  abort(): void {
    this.providers.forEach((x) => {
      if (x.abort) {
        x.abort();
      }
    });
  }

  async *search(query: string): AsyncGenerator<SearchItem, void, unknown> {
    this.abort();
    let allProvidersFailed = true;
    let errors: Error[] = [];

    for (const provider of this.providers) {
      try {
        const results = provider.search(query);

        for await (const r of results) {
          allProvidersFailed = false;
          yield { ...r, provider, _id: ID++ };
        }
      } catch (er) {
        errors.push(er as Error);
      }
    }

    if (allProvidersFailed) {
      // If all providers failed, throw an error
      throw new Error(
        `All providers failed: ${errors.map((e) => e.message).join('; ')}`,
      );
    }
  }

  result(item: SearchItem): CancelablePromise<any> {
    if (item.provider) {
      return item.provider.result(item);
    }
    return CancelablePromise.resolve(undefined);
  }

  async *reverse(
    coordinates: LngLatArray,
  ): AsyncGenerator<SearchItem, void, unknown> {
    for (const provider of this.providers) {
      if (!provider.reverse) {
        continue;
      }

      try {
        const results = provider.reverse(coordinates);

        for await (const r of results) {
          yield { ...r, provider, _id: ID++ };
        }
      } catch (er) {
        // Handle or log errors as needed
      }
    }
  }

  /**
   * Returns the first reverse geocoding result for given coordinates from any provider.
   *
   * @param {LngLatArray} coordinates - The longitude and latitude values.
   * @returns {Promise<SearchItem | undefined>} - A promise that resolves to the first reverse geocoding result, or undefined if no results are found.
   */
  async reverseGeocodeFirstResult(
    coordinates: LngLatArray,
  ): Promise<SearchItem | undefined> {
    for (const provider of this.providers) {
      if (typeof provider.reverse === 'function') {
        try {
          for await (const result of provider.reverse(coordinates)) {
            return result;
          }
        } catch (error) {
          console.error('Error in reverse geocoding:', error);
        }
      }
    }
    return undefined;
  }
}
