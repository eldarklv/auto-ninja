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

// @ts-nocheck

export interface ApiResponse {
  /** @format int32 */
  code?: number;
  type?: string;
  message?: string;
}

export interface Category {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface Pet {
  /** @format int64 */
  id?: number;
  category?: Category;
  /** @example "doggie" */
  name: string;
  photoUrls: string[];
  tags?: Tag[];
  /** pet status in the store */
  status?: PetStatusEnum;
}

export interface Tag {
  /** @format int64 */
  id?: number;
  name?: string;
}

export interface Order {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  petId?: number;
  /** @format int32 */
  quantity?: number;
  /** @format date-time */
  shipDate?: string;
  /** Order Status */
  status?: OrderStatusEnum;
  complete?: boolean;
}

export interface User {
  /** @format int64 */
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phone?: string;
  /**
   * User Status
   * @format int32
   */
  userStatus?: number;
}

/** pet status in the store */
export type PetStatusEnum = "available" | "pending" | "sold";

/** Order Status */
export type OrderStatusEnum = "placed" | "approved" | "delivered";

export interface UploadFileRequest {
  /** Additional data to pass to server */
  additionalMetadata?: string;
  /** file to upload */
  file?: File;
}

export type UploadFileResponse = ApiResponse;

export interface FindPetsByStatusParams {
  /** Status values that need to be considered for filter */
  status: StatusEnum[];
}

/** @default "available" */
export type StatusEnum = "available" | "pending" | "sold";

export type FindPetsByStatusResponse = Pet[];

/** @default "available" */
export type FindPetsByStatusParams1StatusEnum = "available" | "pending" | "sold";

export interface FindPetsByTagsParams {
  /** Tags to filter by */
  tags: string[];
}

export type FindPetsByTagsResponse = Pet[];

export type GetPetByIdResponse = Pet;

export interface UpdatePetWithFormRequest {
  /** Updated name of the pet */
  name?: string;
  /** Updated status of the pet */
  status?: string;
}

export type GetInventoryResponse = Record<string, number>;

export type PlaceOrderResponse = Order;

export type GetOrderByIdResponse = Order;

export type GetUserByNameResponse = User;

export interface LoginUserParams {
  /** The user name for login */
  username: string;
  /** The password for login in clear text */
  password: string;
}

export type LoginUserResponse = string;
