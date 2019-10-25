/** Generate by swagger-axios-codegen */
import { AxiosInstance } from 'axios';
export interface IRequestOptions {
    headers?: any;
    baseURL?: string;
    responseType?: string;
}
export interface ServiceOptions {
    axios?: AxiosInstance;
}
export declare const serviceOptions: ServiceOptions;
export declare class ProductsTestService {
    /**
     * Product Types
     */
    static productsTest(params?: {
        /** Latitude component of location. */
        latitude: number;
        /** Longitude component of location. */
        longitude: number;
    }, options?: IRequestOptions): Promise<Product[]>;
}
export declare class ProductsService {
    /**
     * Product Types
     */
    static products(params?: {
        /** Latitude component of location. */
        latitude: number;
        /** Longitude component of location. */
        longitude: number;
    }, options?: IRequestOptions): Promise<Product[]>;
}
export declare class EstimatesService {
    /**
     * Price Estimates
     */
    static price(params?: {
        /** Latitude component of start location. */
        startLatitude: number;
        /** Longitude component of start location. */
        startLongitude: number;
        /** Latitude component of end location. */
        endLatitude: number;
        /** Longitude component of end location. */
        endLongitude: number;
    }, options?: IRequestOptions): Promise<PriceEstimate[]>;
    /**
     * Time Estimates
     */
    static time(params?: {
        /** Latitude component of start location. */
        startLatitude: number;
        /** Longitude component of start location. */
        startLongitude: number;
        /** Unique customer identifier to be used for experience customization. */
        customerUuid?: string;
        /** Unique identifier representing a specific product for a given latitude & longitude. */
        productId?: string;
    }, options?: IRequestOptions): Promise<Product[]>;
}
export declare class UserService {
    /**
     * User Profile
     */
    static me(options?: IRequestOptions): Promise<Profile>;
    /**
     * User Activity
     */
    static history(params?: {
        /** Offset the list of returned results by this amount. Default is zero. */
        offset?: number;
        /** Number of items to retrieve. Default is 5, maximum is 100. */
        limit?: number;
    }, options?: IRequestOptions): Promise<Activities>;
}
export declare class MappersService {
    /**
     *
     */
    static mapper(params?: {
        /**  */
        mapperId: string;
    }, options?: IRequestOptions): Promise<string>;
}
export interface Product {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
    product_id?: string;
    /** Description of product. */
    description?: string;
    /** Display name of product. */
    display_name?: string;
    /** Capacity of product. For example, 4 people. */
    capacity?: string;
    /** Image URL representing the product. */
    image?: string;
}
export interface PriceEstimate {
    /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles */
    product_id?: string;
    /** [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code. */
    currency_code?: string;
    /** Display name of product. */
    display_name?: string;
    /** Formatted string of estimate in local currency of the start location. Estimate could be a range, a single number (flat rate) or "Metered" for TAXI. */
    estimate?: string;
    /** Lower bound of the estimated price. */
    low_estimate?: number;
    /** Upper bound of the estimated price. */
    high_estimate?: number;
    /** Expected surge multiplier. Surge is active if surge_multiplier is greater than 1. Price estimate already factors in the surge multiplier. */
    surge_multiplier?: number;
}
export interface Profile {
    /** First name of the Uber user. */
    first_name?: string;
    /** Last name of the Uber user. */
    last_name?: string;
    /** Email address of the Uber user */
    email?: string;
    /** Image URL of the Uber user. */
    picture?: string;
    /** Promo code of the Uber user. */
    promo_code?: string;
    /**  */
    role?: RoleType;
}
export interface Activity {
    /** Unique identifier for the activity */
    uuid?: string;
}
export interface Activities {
    /** Position in pagination. */
    offset?: number;
    /** Number of items to retrieve (100 max). */
    limit?: number;
    /** Total number of items available. */
    count?: number;
    /**  */
    history?: Activity[];
}
export interface CreateOrUpdateUserInput {
    /** 用户ID(ID来自User表) */
    userId?: number;
    /** 用户权限 */
    userRights?: EnumCreateOrUpdateUserInputUserRights[];
}
export interface Abc {
    /**  */
    id?: string;
    /**  */
    isLow?: boolean;
}
export interface NumberArrayEnumModel {
    /**  */
    foo?: INumberArrayEnumModelFoo[];
    /**  */
    bar?: INumberArrayEnumModelBar[];
}
export interface Error {
    /**  */
    code?: number;
    /**  */
    message?: string;
    /**  */
    fields?: string;
}
export declare enum RoleType {
    'Admin' = "Admin",
    'User' = "User",
    'SetSms' = "SetSms"
}
export declare enum EnumCreateOrUpdateUserInputUserRights {
    'View' = "View",
    'Operate' = "Operate",
    'Auth' = "Auth",
    'Search' = "Search",
    'Delete' = "Delete",
    'UserManage' = "UserManage",
    'UserConfig' = "UserConfig",
    'SetTime' = "SetTime",
    'SetNetwork' = "SetNetwork",
    'SetSms' = "SetSms",
    'SystemManage' = "SystemManage"
}
declare type INumberArrayEnumModelFoo = 0 | 1 | 2 | 4 | 8;
declare type INumberArrayEnumModelBar = 0 | 1 | 2 | 3;
export {};
