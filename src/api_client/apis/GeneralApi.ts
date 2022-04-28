/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * Diem Dev API Specification
 * Diem Dev API is REST API for client applications to interact the Diem blockchain.
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import {LedgerInfo, LedgerInfoFromJSON, LedgerInfoToJSON} from "../models";

/**
 *
 */
export class GeneralApi extends runtime.BaseAPI {
  /**
   * Ledger information
   */
  async getLedgerInfoRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<LedgerInfo>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      LedgerInfoFromJSON(jsonValue),
    );
  }

  /**
   * Ledger information
   */
  async getLedgerInfo(initOverrides?: RequestInit): Promise<LedgerInfo> {
    const response = await this.getLedgerInfoRaw(initOverrides);
    return await response.value();
  }

  /**
   * API document
   */
  async getSpecHtmlRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/spec.html`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * API document
   */
  async getSpecHtml(initOverrides?: RequestInit): Promise<void> {
    await this.getSpecHtmlRaw(initOverrides);
  }

  /**
   * OpenAPI specification
   */
  async getSpecYamlRaw(
    initOverrides?: RequestInit,
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/openapi.yaml`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * OpenAPI specification
   */
  async getSpecYaml(initOverrides?: RequestInit): Promise<void> {
    await this.getSpecYamlRaw(initOverrides);
  }
}
