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
  AuthControllerLoginResponse,
  AuthControllerLogoutResponse,
  AuthControllerTestResponse,
  CreateSupportRequestDto,
  HotelDto,
  HotelRoomPostDto,
  HotelRoomPutDto,
  HotelsControllerCreateHotelResponse,
  HotelsControllerCreateHotelRoomResponse,
  HotelsControllerEditHotelRoomResponse,
  HotelsControllerGetHotelsListParams,
  HotelsControllerGetHotelsListResponse,
  HotelsControllerSearchRoomByIdResponse,
  HotelsControllerSearchRoomsParams,
  HotelsControllerSearchRoomsResponse,
  HotelsControllerUpdateHotelParams,
  HotelsControllerUpdateHotelResponse,
  LoginDto,
  MarkMessagesAsReadDto,
  RegisterUserDto,
  ReservationDto,
  ReservationsControllerCreateReservationResponse,
  ReservationsControllerDeleteReservationResponse,
  ReservationsControllerGetUserReservationsParams,
  ReservationsControllerGetUserReservationsResponse,
  SendMessageDto,
  SupportControllerCreateSupportRequestResponse,
  SupportControllerGetMessageFromChatResponse,
  SupportControllerGetSupportRequestsForClientParams,
  SupportControllerGetSupportRequestsForClientResponse,
  SupportControllerGetSupportRequestsForManagerParams,
  SupportControllerGetSupportRequestsForManagerResponse,
  SupportControllerReadMessageResponse,
  SupportControllerSendMessageToChatResponse,
  UsersControllerGetUserByEmailParams,
  UsersControllerGetUserByEmailResponse,
  UsersControllerGetUserByIdResponse,
  UsersControllerGetUsersListByAdminParams,
  UsersControllerGetUsersListByAdminResponse,
  UsersControllerGetUsersListByManagerParams,
  UsersControllerGetUsersListByManagerResponse,
  UsersControllerRegisterResponse,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Api<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerRegister
   * @request POST:/api/admin/users
   */
  usersControllerRegister = (data: RegisterUserDto, params: RequestParams = {}) =>
    this.request<UsersControllerRegisterResponse, any>({
      path: `/api/admin/users`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerGetUsersListByAdmin
   * @request GET:/api/admin/users
   */
  usersControllerGetUsersListByAdmin = (query: UsersControllerGetUsersListByAdminParams, params: RequestParams = {}) =>
    this.request<UsersControllerGetUsersListByAdminResponse, any>({
      path: `/api/admin/users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerGetUsersListByManager
   * @request GET:/api/manager/users
   */
  usersControllerGetUsersListByManager = (
    query: UsersControllerGetUsersListByManagerParams,
    params: RequestParams = {},
  ) =>
    this.request<UsersControllerGetUsersListByManagerResponse, any>({
      path: `/api/manager/users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerGetUserById
   * @request GET:/api/admin/user-by-id/{id}
   */
  usersControllerGetUserById = (id: string, params: RequestParams = {}) =>
    this.request<UsersControllerGetUserByIdResponse, any>({
      path: `/api/admin/user-by-id/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Users
   * @name UsersControllerGetUserByEmail
   * @request GET:/api/admin/user-by-email
   */
  usersControllerGetUserByEmail = (query: UsersControllerGetUserByEmailParams, params: RequestParams = {}) =>
    this.request<UsersControllerGetUserByEmailResponse, any>({
      path: `/api/admin/user-by-email`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerLogin
   * @request POST:/api/auth/login
   */
  authControllerLogin = (data: LoginDto, params: RequestParams = {}) =>
    this.request<AuthControllerLoginResponse, any>({
      path: `/api/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerTest
   * @request GET:/api/auth/test
   */
  authControllerTest = (params: RequestParams = {}) =>
    this.request<AuthControllerTestResponse, any>({
      path: `/api/auth/test`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerLogout
   * @request GET:/api/auth/logout
   */
  authControllerLogout = (params: RequestParams = {}) =>
    this.request<AuthControllerLogoutResponse, any>({
      path: `/api/auth/logout`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Hotels
   * @name HotelsControllerSearchRooms
   * @request GET:/api/common/hotel-rooms
   */
  hotelsControllerSearchRooms = (query: HotelsControllerSearchRoomsParams, params: RequestParams = {}) =>
    this.request<HotelsControllerSearchRoomsResponse, any>({
      path: `/api/common/hotel-rooms`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Hotels
   * @name HotelsControllerSearchRoomById
   * @request GET:/api/common/hotel-rooms/{id}
   */
  hotelsControllerSearchRoomById = (id: string, params: RequestParams = {}) =>
    this.request<HotelsControllerSearchRoomByIdResponse, any>({
      path: `/api/common/hotel-rooms/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Hotels
   * @name HotelsControllerCreateHotel
   * @request POST:/api/admin/hotels
   */
  hotelsControllerCreateHotel = (data: HotelDto, params: RequestParams = {}) =>
    this.request<HotelsControllerCreateHotelResponse, any>({
      path: `/api/admin/hotels`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Hotels
   * @name HotelsControllerGetHotelsList
   * @request GET:/api/admin/hotels
   */
  hotelsControllerGetHotelsList = (query: HotelsControllerGetHotelsListParams, params: RequestParams = {}) =>
    this.request<HotelsControllerGetHotelsListResponse, any>({
      path: `/api/admin/hotels`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Hotels
   * @name HotelsControllerUpdateHotel
   * @request PUT:/api/admin/hotels/{id}
   */
  hotelsControllerUpdateHotel = (
    { id, ...query }: HotelsControllerUpdateHotelParams,
    data: HotelDto,
    params: RequestParams = {},
  ) =>
    this.request<HotelsControllerUpdateHotelResponse, any>({
      path: `/api/admin/hotels/${id}`,
      method: "PUT",
      query: query,
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Hotels
   * @name HotelsControllerCreateHotelRoom
   * @request POST:/api/admin/hotel-rooms
   */
  hotelsControllerCreateHotelRoom = (data: HotelRoomPostDto, params: RequestParams = {}) =>
    this.request<HotelsControllerCreateHotelRoomResponse, any>({
      path: `/api/admin/hotel-rooms`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Hotels
   * @name HotelsControllerEditHotelRoom
   * @request PUT:/api/admin/hotel-rooms/{id}
   */
  hotelsControllerEditHotelRoom = (id: string, data: HotelRoomPutDto, params: RequestParams = {}) =>
    this.request<HotelsControllerEditHotelRoomResponse, any>({
      path: `/api/admin/hotel-rooms/${id}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reservations
   * @name ReservationsControllerCreateReservation
   * @request POST:/api/client/reservations
   */
  reservationsControllerCreateReservation = (data: ReservationDto, params: RequestParams = {}) =>
    this.request<ReservationsControllerCreateReservationResponse, any>({
      path: `/api/client/reservations`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reservations
   * @name ReservationsControllerGetUserReservations
   * @request GET:/api/client/reservations
   */
  reservationsControllerGetUserReservations = (
    query: ReservationsControllerGetUserReservationsParams,
    params: RequestParams = {},
  ) =>
    this.request<ReservationsControllerGetUserReservationsResponse, any>({
      path: `/api/client/reservations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Reservations
   * @name ReservationsControllerDeleteReservation
   * @request DELETE:/api/client/reservations/{id}
   */
  reservationsControllerDeleteReservation = (id: string, params: RequestParams = {}) =>
    this.request<ReservationsControllerDeleteReservationResponse, any>({
      path: `/api/client/reservations/${id}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Support
   * @name SupportControllerCreateSupportRequest
   * @request POST:/api/client/support-requests
   */
  supportControllerCreateSupportRequest = (data: CreateSupportRequestDto, params: RequestParams = {}) =>
    this.request<SupportControllerCreateSupportRequestResponse, any>({
      path: `/api/client/support-requests`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Support
   * @name SupportControllerGetSupportRequestsForClient
   * @request GET:/api/client/support-requests
   */
  supportControllerGetSupportRequestsForClient = (
    query: SupportControllerGetSupportRequestsForClientParams,
    params: RequestParams = {},
  ) =>
    this.request<SupportControllerGetSupportRequestsForClientResponse, any>({
      path: `/api/client/support-requests`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Support
   * @name SupportControllerGetSupportRequestsForManager
   * @request GET:/api/manager/support-requests
   */
  supportControllerGetSupportRequestsForManager = (
    query: SupportControllerGetSupportRequestsForManagerParams,
    params: RequestParams = {},
  ) =>
    this.request<SupportControllerGetSupportRequestsForManagerResponse, any>({
      path: `/api/manager/support-requests`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Support
   * @name SupportControllerGetMessageFromChat
   * @request GET:/api/common/support-requests/{id}/messages
   */
  supportControllerGetMessageFromChat = (id: string, params: RequestParams = {}) =>
    this.request<SupportControllerGetMessageFromChatResponse, any>({
      path: `/api/common/support-requests/${id}/messages`,
      method: "GET",
      ...params,
    });
  /**
   * No description
   *
   * @tags Support
   * @name SupportControllerSendMessageToChat
   * @request POST:/api/common/support-requests/messages
   */
  supportControllerSendMessageToChat = (data: SendMessageDto, params: RequestParams = {}) =>
    this.request<SupportControllerSendMessageToChatResponse, any>({
      path: `/api/common/support-requests/messages`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Support
   * @name SupportControllerReadMessage
   * @request POST:/api/common/support-requests/messages/read
   */
  supportControllerReadMessage = (data: MarkMessagesAsReadDto, params: RequestParams = {}) =>
    this.request<SupportControllerReadMessageResponse, any>({
      path: `/api/common/support-requests/messages/read`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
