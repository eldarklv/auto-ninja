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

import {
  CreateEvent,
  CreateEventUserEventCreatePostError,
  CreateEventUserEventCreatePostResponse,
  DeleteEventUserEventDeletePostResponse,
  GetEventByIdUserEventEventIdGetError,
  GetEventByIdUserEventEventIdGetResponse,
  GetEventUserEventGetResponse,
  GetTagsUserEventTagsGetResponse,
  UpdateEventUserEventUpdatePostError,
  UpdateEventUserEventUpdatePostResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Создание пользовательского события
   *
   * @tags Event
   * @name CreateEventUserEventCreatePost
   * @summary Create Event
   * @request POST:/user/event/create
   * @secure
   */
  createEventUserEventCreatePost = (data: CreateEvent, params: RequestParams = {}) =>
    this.request<CreateEventUserEventCreatePostResponse, CreateEventUserEventCreatePostError>({
      path: `/user/event/create`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Обновление пользовательского события
   *
   * @tags Event
   * @name UpdateEventUserEventUpdatePost
   * @summary Update Event
   * @request POST:/user/event/update
   * @secure
   */
  updateEventUserEventUpdatePost = (data: CreateEvent, params: RequestParams = {}) =>
    this.request<UpdateEventUserEventUpdatePostResponse, UpdateEventUserEventUpdatePostError>({
      path: `/user/event/update`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Удаление пользовательского события
   *
   * @tags Event
   * @name DeleteEventUserEventDeletePost
   * @summary Delete Event
   * @request POST:/user/event/delete
   * @secure
   */
  deleteEventUserEventDeletePost = (params: RequestParams = {}) =>
    this.request<DeleteEventUserEventDeletePostResponse, any>({
      path: `/user/event/delete`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Получение пользовательского события
   *
   * @tags Event
   * @name GetEventUserEventGet
   * @summary Get Event
   * @request GET:/user/event
   * @secure
   */
  getEventUserEventGet = (params: RequestParams = {}) =>
    this.request<GetEventUserEventGetResponse, any>({
      path: `/user/event`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Получение списка тем событий
   *
   * @tags Event
   * @name GetTagsUserEventTagsGet
   * @summary Get Tags
   * @request GET:/user/event/tags
   * @secure
   */
  getTagsUserEventTagsGet = (params: RequestParams = {}) =>
    this.request<GetTagsUserEventTagsGetResponse, any>({
      path: `/user/event/tags`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Получение события по ID
   *
   * @tags Event
   * @name GetEventByIdUserEventEventIdGet
   * @summary Get Event By Id
   * @request GET:/user/event/{event_id}
   * @secure
   */
  getEventByIdUserEventEventIdGet = (eventId: number, params: RequestParams = {}) =>
    this.request<GetEventByIdUserEventEventIdGetResponse, GetEventByIdUserEventEventIdGetError>({
      path: `/user/event/${eventId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
