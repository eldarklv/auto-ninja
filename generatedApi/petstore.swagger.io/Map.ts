/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { EventPointsRequest, GetPointsMapPostError, GetPointsMapPostResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Map<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Получение списка ивентов для карты
   *
   * @tags Map
   * @name GetPointsMapPost
   * @summary Get Points
   * @request POST:/map
   * @secure
   */
  getPointsMapPost = (data: EventPointsRequest, params: RequestParams = {}) =>
    this.request<GetPointsMapPostResponse, GetPointsMapPostError>({
      path: `/map`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
