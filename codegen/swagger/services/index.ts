/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void) {
  const req = serviceOptions.axios ? serviceOptions.axios.request(configs) : axiosStatic(configs);

  return req
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
}

function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export class ProductsTestService {
  /**
   * Product Types
   */
  static productsTest(
    params: {
      /** Latitude component of location. */
      latitude: number;
      /** Longitude component of location. */
      longitude: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      let url = '/products-test';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { latitude: params['latitude'], longitude: params['longitude'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ProductsService {
  /**
   * Product Types
   */
  static products(
    params: {
      /** Latitude component of location. */
      latitude: number;
      /** Longitude component of location. */
      longitude: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      let url = '/products';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { latitude: params['latitude'], longitude: params['longitude'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class EstimatesService {
  /**
   * Price Estimates
   */
  static price(
    params: {
      /** Latitude component of start location. */
      startLatitude: number;
      /** Longitude component of start location. */
      startLongitude: number;
      /** Latitude component of end location. */
      endLatitude: number;
      /** Longitude component of end location. */
      endLongitude: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PriceEstimate[]> {
    return new Promise((resolve, reject) => {
      let url = '/estimates/price';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        start_latitude: params['startLatitude'],
        start_longitude: params['startLongitude'],
        end_latitude: params['endLatitude'],
        end_longitude: params['endLongitude']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Time Estimates
   */
  static time(
    params: {
      /** Latitude component of start location. */
      startLatitude: number;
      /** Longitude component of start location. */
      startLongitude: number;
      /** Unique customer identifier to be used for experience customization. */
      customerUuid?: string;
      /** Unique identifier representing a specific product for a given latitude & longitude. */
      productId?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      let url = '/estimates/time';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        start_latitude: params['startLatitude'],
        start_longitude: params['startLongitude'],
        customer_uuid: params['customerUuid'],
        product_id: params['productId']
      };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class UserService {
  /**
   * User Profile
   */
  static me(options: IRequestOptions = {}): Promise<Profile> {
    return new Promise((resolve, reject) => {
      let url = '/me';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * User Activity
   */
  static history(
    params: {
      /** Offset the list of returned results by this amount. Default is zero. */
      offset?: number;
      /** Number of items to retrieve. Default is 5, maximum is 100. */
      limit?: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Activities> {
    return new Promise((resolve, reject) => {
      let url = '/history';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { offset: params['offset'], limit: params['limit'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class MappersService {
  /**
   *
   */
  static mapper(
    params: {
      /**  */
      mapperId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = '/crawler/v1/mapper/{mapper.id}';
      url = url.replace('{mapper.id}', params['mapperId'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
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

export enum RoleType {
  'Admin' = 'Admin',
  'User' = 'User',
  'SetSms' = 'SetSms'
}
export enum EnumCreateOrUpdateUserInputUserRights {
  'View' = 'View',
  'Operate' = 'Operate',
  'Auth' = 'Auth',
  'Search' = 'Search',
  'Delete' = 'Delete',
  'UserManage' = 'UserManage',
  'UserConfig' = 'UserConfig',
  'SetTime' = 'SetTime',
  'SetNetwork' = 'SetNetwork',
  'SetSms' = 'SetSms',
  'SystemManage' = 'SystemManage'
}
type INumberArrayEnumModelFoo = 0 | 1 | 2 | 4 | 8;
type INumberArrayEnumModelBar = 0 | 1 | 2 | 3;
