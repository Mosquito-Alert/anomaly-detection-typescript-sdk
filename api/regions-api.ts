/* tslint:disable */
/* eslint-disable */
/**
 * Bites Anomaly Detection API
 * API for the Bites Anomaly Detection project
 *
 * The version of the OpenAPI document: 1.0.0 (v1)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { Municipality } from '../models';
// @ts-ignore
import type { MunicipalityRetrieve } from '../models';
// @ts-ignore
import type { PaginatedMunicipalityList } from '../models';
// @ts-ignore
import type { RegionsListOrderingParameter } from '../models';
/**
 * RegionsApi - axios parameter creator
 * @export
 */
export const RegionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ViewSet for the Municipality model with MVT rendering.
         * @param {RegionsListOrderingParameter} [ordering] Order by &#x60;code&#x60;, &#x60;name&#x60; or &#x60;province&#x60;.
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [regionName] Region name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (ordering?: RegionsListOrderingParameter, page?: number, pageSize?: number, regionName?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/regions/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (ordering !== undefined) {
                localVarQueryParameter['ordering'] = ordering;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (regionName !== undefined) {
                localVarQueryParameter['region_name'] = regionName;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * ViewSet for the Municipality model with MVT rendering.
         * @param {number} id A unique integer value identifying this Municipality.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('retrieve', 'id', id)
            const localVarPath = `/regions/{id}/`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Action that returns the tiles of a specified area and zoom
         * @param {string} x 
         * @param {string} y 
         * @param {string} z 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tilesRetrieve: async (x: string, y: string, z: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'x' is not null or undefined
            assertParamExists('tilesRetrieve', 'x', x)
            // verify required parameter 'y' is not null or undefined
            assertParamExists('tilesRetrieve', 'y', y)
            // verify required parameter 'z' is not null or undefined
            assertParamExists('tilesRetrieve', 'z', z)
            const localVarPath = `/regions/tiles/{z}/{x}/{y}/`
                .replace(`{${"x"}}`, encodeURIComponent(String(x)))
                .replace(`{${"y"}}`, encodeURIComponent(String(y)))
                .replace(`{${"z"}}`, encodeURIComponent(String(z)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication tokenAuth required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RegionsApi - functional programming interface
 * @export
 */
export const RegionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RegionsApiAxiosParamCreator(configuration)
    return {
        /**
         * ViewSet for the Municipality model with MVT rendering.
         * @param {RegionsListOrderingParameter} [ordering] Order by &#x60;code&#x60;, &#x60;name&#x60; or &#x60;province&#x60;.
         * @param {number} [page] A page number within the paginated result set.
         * @param {number} [pageSize] Number of results to return per page.
         * @param {string} [regionName] Region name.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(ordering?: RegionsListOrderingParameter, page?: number, pageSize?: number, regionName?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PaginatedMunicipalityList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(ordering, page, pageSize, regionName, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RegionsApi.list']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * ViewSet for the Municipality model with MVT rendering.
         * @param {number} id A unique integer value identifying this Municipality.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieve(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MunicipalityRetrieve>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieve(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RegionsApi.retrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Action that returns the tiles of a specified area and zoom
         * @param {string} x 
         * @param {string} y 
         * @param {string} z 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tilesRetrieve(x: string, y: string, z: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Municipality>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tilesRetrieve(x, y, z, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RegionsApi.tilesRetrieve']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RegionsApi - factory interface
 * @export
 */
export const RegionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RegionsApiFp(configuration)
    return {
        /**
         * ViewSet for the Municipality model with MVT rendering.
         * @param {RegionsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: RegionsApiListRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<PaginatedMunicipalityList> {
            return localVarFp.list(requestParameters.ordering, requestParameters.page, requestParameters.pageSize, requestParameters.regionName, options).then((request) => request(axios, basePath));
        },
        /**
         * ViewSet for the Municipality model with MVT rendering.
         * @param {RegionsApiRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve(requestParameters: RegionsApiRetrieveRequest, options?: RawAxiosRequestConfig): AxiosPromise<MunicipalityRetrieve> {
            return localVarFp.retrieve(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * Action that returns the tiles of a specified area and zoom
         * @param {RegionsApiTilesRetrieveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tilesRetrieve(requestParameters: RegionsApiTilesRetrieveRequest, options?: RawAxiosRequestConfig): AxiosPromise<Municipality> {
            return localVarFp.tilesRetrieve(requestParameters.x, requestParameters.y, requestParameters.z, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in RegionsApi.
 * @export
 * @interface RegionsApiListRequest
 */
export interface RegionsApiListRequest {
    /**
     * Order by &#x60;code&#x60;, &#x60;name&#x60; or &#x60;province&#x60;.
     * @type {RegionsListOrderingParameter}
     * @memberof RegionsApiList
     */
    readonly ordering?: RegionsListOrderingParameter

    /**
     * A page number within the paginated result set.
     * @type {number}
     * @memberof RegionsApiList
     */
    readonly page?: number

    /**
     * Number of results to return per page.
     * @type {number}
     * @memberof RegionsApiList
     */
    readonly pageSize?: number

    /**
     * Region name.
     * @type {string}
     * @memberof RegionsApiList
     */
    readonly regionName?: string
}

/**
 * Request parameters for retrieve operation in RegionsApi.
 * @export
 * @interface RegionsApiRetrieveRequest
 */
export interface RegionsApiRetrieveRequest {
    /**
     * A unique integer value identifying this Municipality.
     * @type {number}
     * @memberof RegionsApiRetrieve
     */
    readonly id: number
}

/**
 * Request parameters for tilesRetrieve operation in RegionsApi.
 * @export
 * @interface RegionsApiTilesRetrieveRequest
 */
export interface RegionsApiTilesRetrieveRequest {
    /**
     * 
     * @type {string}
     * @memberof RegionsApiTilesRetrieve
     */
    readonly x: string

    /**
     * 
     * @type {string}
     * @memberof RegionsApiTilesRetrieve
     */
    readonly y: string

    /**
     * 
     * @type {string}
     * @memberof RegionsApiTilesRetrieve
     */
    readonly z: string
}

/**
 * RegionsApi - object-oriented interface
 * @export
 * @class RegionsApi
 * @extends {BaseAPI}
 */
export class RegionsApi extends BaseAPI {
    /**
     * ViewSet for the Municipality model with MVT rendering.
     * @param {RegionsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegionsApi
     */
    public list(requestParameters: RegionsApiListRequest = {}, options?: RawAxiosRequestConfig) {
        return RegionsApiFp(this.configuration).list(requestParameters.ordering, requestParameters.page, requestParameters.pageSize, requestParameters.regionName, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * ViewSet for the Municipality model with MVT rendering.
     * @param {RegionsApiRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegionsApi
     */
    public retrieve(requestParameters: RegionsApiRetrieveRequest, options?: RawAxiosRequestConfig) {
        return RegionsApiFp(this.configuration).retrieve(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Action that returns the tiles of a specified area and zoom
     * @param {RegionsApiTilesRetrieveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RegionsApi
     */
    public tilesRetrieve(requestParameters: RegionsApiTilesRetrieveRequest, options?: RawAxiosRequestConfig) {
        return RegionsApiFp(this.configuration).tilesRetrieve(requestParameters.x, requestParameters.y, requestParameters.z, options).then((request) => request(this.axios, this.basePath));
    }
}

