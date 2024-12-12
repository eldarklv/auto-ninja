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

import { GetInventoryResponse, GetOrderByIdResponse, Order, PlaceOrderResponse } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Store<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Returns a map of status codes to quantities
   *
   * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   */
  getInventory = (params: RequestParams = {}) =>
    this.request<GetInventoryResponse, any>({
      path: `/store/inventory`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   */
  placeOrder = (body: Order, params: RequestParams = {}) =>
    this.request<PlaceOrderResponse, void>({
      path: `/store/order`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   *
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   */
  getOrderById = (orderId: number, params: RequestParams = {}) =>
    this.request<GetOrderByIdResponse, void>({
      path: `/store/order/${orderId}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   */
  deleteOrder = (orderId: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/store/order/${orderId}`,
      method: "DELETE",
      ...params,
    });
}
