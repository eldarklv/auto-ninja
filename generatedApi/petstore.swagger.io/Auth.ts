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
  AuthJwtLoginAuthLoginPostError,
  AuthJwtLoginAuthLoginPostResponse,
  AuthJwtLogoutAuthLogoutPostResponse,
  BodyAuthJwtLoginAuthLoginPost,
  RegisterRegisterAuthRegisterPostError,
  RegisterRegisterAuthRegisterPostResponse,
  UserCreate,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name AuthJwtLoginAuthLoginPost
   * @summary Auth:Jwt.Login
   * @request POST:/auth/login
   */
  authJwtLoginAuthLoginPost = (data: BodyAuthJwtLoginAuthLoginPost, params: RequestParams = {}) =>
    this.request<AuthJwtLoginAuthLoginPostResponse, AuthJwtLoginAuthLoginPostError>({
      path: `/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthJwtLogoutAuthLogoutPost
   * @summary Auth:Jwt.Logout
   * @request POST:/auth/logout
   * @secure
   */
  authJwtLogoutAuthLogoutPost = (params: RequestParams = {}) =>
    this.request<AuthJwtLogoutAuthLogoutPostResponse, void>({
      path: `/auth/logout`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name RegisterRegisterAuthRegisterPost
   * @summary Register:Register
   * @request POST:/auth/register
   */
  registerRegisterAuthRegisterPost = (data: UserCreate, params: RequestParams = {}) =>
    this.request<RegisterRegisterAuthRegisterPostResponse, RegisterRegisterAuthRegisterPostError>({
      path: `/auth/register`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
