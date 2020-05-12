/* tslint:disable */
/* eslint-disable */
/**
 * PMM QAN API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    InlineResponse2001,
    InlineResponse2001FromJSON,
    InlineResponse2001ToJSON,
    InlineResponseDefault,
    InlineResponseDefaultFromJSON,
    InlineResponseDefaultToJSON,
} from '../models';

export interface GetMetricsNamesRequest {
    body: object;
}

/**
 * 
 */
export class MetricsNamesApi extends runtime.BaseAPI {

    /**
     * GetMetricsNames gets map of metrics names.
     */
    async getMetricsNamesRaw(requestParameters: GetMetricsNamesRequest): Promise<runtime.ApiResponse<InlineResponse2001>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling getMetricsNames.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v0/qan/GetMetricsNames`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InlineResponse2001FromJSON(jsonValue));
    }

    /**
     * GetMetricsNames gets map of metrics names.
     */
    async getMetricsNames(requestParameters: GetMetricsNamesRequest): Promise<InlineResponse2001> {
        const response = await this.getMetricsNamesRaw(requestParameters);
        return await response.value();
    }

}
