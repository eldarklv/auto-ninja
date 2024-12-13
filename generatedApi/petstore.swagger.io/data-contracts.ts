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

/** ApiResponse */
export interface ApiResponse {
  /** Status */
  status: number;
  /** Data */
  data?: null;
  /** Message */
  message?: string | null;
  /** Errors */
  errors?: any[] | null;
}

/** BearerResponse */
export interface BearerResponse {
  /** Access Token */
  access_token: string;
  /** Token Type */
  token_type: string;
}

/** Body_auth_jwt_login_auth_login_post */
export interface BodyAuthJwtLoginAuthLoginPost {
  /** Grant Type */
  grant_type?: string | null;
  /** Username */
  username: string;
  /** Password */
  password: string;
  /**
   * Scope
   * @default ""
   */
  scope?: string;
  /** Client Id */
  client_id?: string | null;
  /** Client Secret */
  client_secret?: string | null;
}

/** CreateEvent */
export interface CreateEvent {
  /** Title */
  title: string;
  /** Description */
  description: string;
  /** Tag */
  tag: number;
  location: Location;
}

/** ErrorModel */
export interface ErrorModel {
  /** Detail */
  detail: string | Record<string, string>;
}

/** Event */
export interface Event {
  /** Event Id */
  event_id: number;
  /** User */
  user?: string | null;
  /** Name */
  name: string;
  /** Description */
  description: string;
  /** Tag */
  tag: number;
  /**
   * Date Create
   * @format date-time
   */
  date_create: string;
  /**
   * Date Close
   * @format date-time
   */
  date_close: string;
}

/** EventPoints */
export interface EventPoints {
  /** Count */
  count: number;
  /** Events */
  events: EventPont[];
}

/** EventPointsRequest */
export interface EventPointsRequest {
  client_location: Location;
  /** Tag */
  tag?: number | null;
}

/** EventPointsResponse */
export interface EventPointsResponse {
  /** Status */
  status: number;
  data: EventPoints;
  /** Message */
  message?: string | null;
  /** Errors */
  errors?: any[] | null;
}

/** EventPont */
export interface EventPont {
  /** Event Id */
  event_id: number;
  /** Name */
  name: string;
  /** Icon */
  icon: string;
  /** Tag */
  tag: number;
  location: Location;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** Location */
export interface Location {
  /** Lat */
  lat: number;
  /** Lon */
  lon: number;
}

/** ResponseEvent */
export interface ResponseEvent {
  /** Status */
  status: number;
  data: Event;
  /** Message */
  message?: string | null;
  /** Errors */
  errors?: any[] | null;
}

/** Tag */
export interface Tag {
  /** Tag Id */
  tag_id: number;
  /** Name */
  name: string;
}

/** TagsResponse */
export interface TagsResponse {
  /** Status */
  status: number;
  /** Data */
  data: Tag[];
  /** Message */
  message?: string | null;
  /** Errors */
  errors?: any[] | null;
}

/** UserCreate */
export interface UserCreate {
  /**
   * Email
   * @format email
   */
  email: string;
  /** Password */
  password: string;
  /**
   * Is Active
   * @default true
   */
  is_active?: boolean | null;
  /**
   * Is Superuser
   * @default false
   */
  is_superuser?: boolean | null;
  /**
   * Is Verified
   * @default false
   */
  is_verified?: boolean | null;
  /** Username */
  username: string;
}

/** UserRead */
export interface UserRead {
  /** Id */
  id: any;
  /**
   * Email
   * @format email
   */
  email: string;
  /**
   * Is Active
   * @default true
   */
  is_active?: boolean;
  /**
   * Is Superuser
   * @default false
   */
  is_superuser?: boolean;
  /**
   * Is Verified
   * @default false
   */
  is_verified?: boolean;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

export type AuthJwtLoginAuthLoginPostResponse = BearerResponse;

export type AuthJwtLoginAuthLoginPostError = ErrorModel | HTTPValidationError;

export type AuthJwtLogoutAuthLogoutPostResponse = any;

export type RegisterRegisterAuthRegisterPostResponse = UserRead;

export type RegisterRegisterAuthRegisterPostError = ErrorModel | HTTPValidationError;

export type CreateEventUserEventCreatePostResponse = ResponseEvent;

export type CreateEventUserEventCreatePostError = HTTPValidationError;

export type UpdateEventUserEventUpdatePostResponse = ResponseEvent;

export type UpdateEventUserEventUpdatePostError = HTTPValidationError;

export type DeleteEventUserEventDeletePostResponse = ApiResponse;

export type GetEventUserEventGetResponse = ResponseEvent;

export type GetTagsUserEventTagsGetResponse = TagsResponse;

export type GetEventByIdUserEventEventIdGetResponse = ResponseEvent;

export type GetEventByIdUserEventEventIdGetError = HTTPValidationError;

export type GetPointsMapPostResponse = EventPointsResponse;

export type GetPointsMapPostError = HTTPValidationError;
