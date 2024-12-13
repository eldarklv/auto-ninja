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

export interface RegisterUserDto {
  name: string;
  email: string;
  role: string;
  contactPhone: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
  role: string;
  contactPhone: string;
  passwordHash: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface Hotel {
  title: string;
  description: string;
}

export interface HotelRoom {
  hotel: Hotel;
  description: string;
  images: string[];
  isEnabled: boolean;
}

export interface HotelDto {
  title: string;
  description: string;
}

export interface HotelRoomPostDto {
  hotelId: string;
  description: string;
}

export interface HotelRoomPutDto {
  hotelId: string;
  description: string;
  isEnabled: boolean;
}

export interface ReservationDto {
  userId: string;
  hotelId: string;
  roomId: string;
  /** @format date-time */
  dateStart: string;
  /** @format date-time */
  dateEnd: string;
}

export interface Reservation {
  userId: User;
  hotelId: Hotel;
  roomId: HotelRoom;
  /** @format date-time */
  dateStart: string;
  /** @format date-time */
  dateEnd: string;
}

export interface CreateSupportRequestDto {
  user: string;
  text: string;
}

export interface Message {
  author: User;
  /** @format date-time */
  sentAt: string;
  text: string;
  /** @format date-time */
  readAt: string;
}

export interface SupportRequest {
  user: User;
  /** @format date-time */
  sentAt: string;
  messages: Message[];
  isActive: boolean;
}

export interface SendMessageDto {
  author: object;
  supportRequest: string;
  text: string;
}

export interface MarkMessagesAsReadDto {
  user: string;
  supportRequest: string;
  /** @format date-time */
  createdBefore: string;
}

export type AppControllerGetHelloResponse = any;

export type UsersControllerRegisterResponse = User;

export interface UsersControllerGetUsersListByAdminParams {
  limit: number;
  offset: number;
  name: string;
  email: string;
  contactPhone: string;
}

export type UsersControllerGetUsersListByAdminResponse = User[];

export interface UsersControllerGetUsersListByManagerParams {
  limit: number;
  offset: number;
  name: string;
  email: string;
  contactPhone: string;
}

export type UsersControllerGetUsersListByManagerResponse = User[];

export type UsersControllerGetUserByIdResponse = User;

export interface UsersControllerGetUserByEmailParams {
  email: string;
}

export type UsersControllerGetUserByEmailResponse = User;

export type AuthControllerLoginResponse = User;

export type AuthControllerTestResponse = any;

export type AuthControllerLogoutResponse = any;

export interface HotelsControllerSearchRoomsParams {
  limit: number;
  offset: number;
  hotelId: string;
}

export type HotelsControllerSearchRoomsResponse = HotelRoom[];

export type HotelsControllerSearchRoomByIdResponse = HotelRoom;

export type HotelsControllerCreateHotelResponse = Hotel;

export interface HotelsControllerGetHotelsListParams {
  limit: number;
  offset: number;
  title: string;
}

export type HotelsControllerGetHotelsListResponse = Hotel[];

export interface HotelsControllerUpdateHotelParams {
  id: string;
}

export type HotelsControllerUpdateHotelResponse = Hotel;

export type HotelsControllerCreateHotelRoomResponse = HotelRoom;

export type HotelsControllerEditHotelRoomResponse = HotelRoom;

export type ReservationsControllerCreateReservationResponse = Reservation;

export interface ReservationsControllerGetUserReservationsParams {
  /** @format date-time */
  dateStart: string;
  /** @format date-time */
  dateEnd: string;
}

export type ReservationsControllerGetUserReservationsResponse = Reservation[];

export type ReservationsControllerDeleteReservationResponse = any;

export type SupportControllerCreateSupportRequestResponse = SupportRequest;

export interface SupportControllerGetSupportRequestsForClientParams {
  user: string;
  isActive: boolean;
}

export type SupportControllerGetSupportRequestsForClientResponse = SupportRequest[];

export interface SupportControllerGetSupportRequestsForManagerParams {
  user: string;
  isActive: boolean;
}

export type SupportControllerGetSupportRequestsForManagerResponse = SupportRequest[];

export type SupportControllerGetMessageFromChatResponse = any;

export type SupportControllerSendMessageToChatResponse = Message;

export type SupportControllerReadMessageResponse = boolean;
