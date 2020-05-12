/* tslint:disable */
/* eslint-disable */
/**
 * PMM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: public
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    InlineResponse20021Remote,
    InlineResponse20021RemoteFromJSON,
    InlineResponse20021RemoteFromJSONTyped,
    InlineResponse20021RemoteToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse20021
 */
export interface InlineResponse20021 {
    /**
     * 
     * @type {InlineResponse20021Remote}
     * @memberof InlineResponse20021
     */
    remote?: InlineResponse20021Remote;
}

export function InlineResponse20021FromJSON(json: any): InlineResponse20021 {
    return InlineResponse20021FromJSONTyped(json, false);
}

export function InlineResponse20021FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse20021 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'remote': !exists(json, 'remote') ? undefined : InlineResponse20021RemoteFromJSON(json['remote']),
    };
}

export function InlineResponse20021ToJSON(value?: InlineResponse20021 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'remote': InlineResponse20021RemoteToJSON(value.remote),
    };
}


