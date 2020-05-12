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
/**
 * 
 * @export
 * @interface InlineObject7
 */
export interface InlineObject7 {
    /**
     * The pmm-agent identifier which runs this instance.
     * @type {string}
     * @memberof InlineObject7
     */
    pmm_agent_id?: string;
    /**
     * Custom user-assigned labels.
     * @type {{ [key: string]: string; }}
     * @memberof InlineObject7
     */
    custom_labels?: { [key: string]: string; };
}

export function InlineObject7FromJSON(json: any): InlineObject7 {
    return InlineObject7FromJSONTyped(json, false);
}

export function InlineObject7FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject7 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pmm_agent_id': !exists(json, 'pmm_agent_id') ? undefined : json['pmm_agent_id'],
        'custom_labels': !exists(json, 'custom_labels') ? undefined : json['custom_labels'],
    };
}

export function InlineObject7ToJSON(value?: InlineObject7 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pmm_agent_id': value.pmm_agent_id,
        'custom_labels': value.custom_labels,
    };
}


