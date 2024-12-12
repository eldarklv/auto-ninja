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
  FindPetsByStatusParams,
  FindPetsByStatusResponse,
  FindPetsByTagsParams,
  FindPetsByTagsResponse,
  GetPetByIdResponse,
  Pet,
  UpdatePetWithFormRequest,
  UploadFileRequest,
  UploadFileResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Pet<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */
  uploadFile = (petId: number, data: UploadFileRequest, params: RequestParams = {}) =>
    this.request<UploadFileResponse, any>({
      path: `/pet/${petId}/uploadImage`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name AddPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   */
  addPet = (body: Pet, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/pet`,
      method: "POST",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name UpdatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   */
  updatePet = (body: Pet, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/pet`,
      method: "PUT",
      body: body,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Multiple status values can be provided with comma separated strings
   *
   * @tags pet
   * @name FindPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   */
  findPetsByStatus = (query: FindPetsByStatusParams, params: RequestParams = {}) =>
    this.request<FindPetsByStatusResponse, void>({
      path: `/pet/findByStatus`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   *
   * @tags pet
   * @name FindPetsByTags
   * @summary Finds Pets by tags
   * @request GET:/pet/findByTags
   * @deprecated
   * @secure
   */
  findPetsByTags = (query: FindPetsByTagsParams, params: RequestParams = {}) =>
    this.request<FindPetsByTagsResponse, void>({
      path: `/pet/findByTags`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Returns a single pet
   *
   * @tags pet
   * @name GetPetById
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   */
  getPetById = (petId: number, params: RequestParams = {}) =>
    this.request<GetPetByIdResponse, void>({
      path: `/pet/${petId}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name UpdatePetWithForm
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @secure
   */
  updatePetWithForm = (petId: number, data: UpdatePetWithFormRequest, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/pet/${petId}`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags pet
   * @name DeletePet
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   */
  deletePet = (petId: number, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/pet/${petId}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
