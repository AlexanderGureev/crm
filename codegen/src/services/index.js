/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic from 'axios';
// Add default options
export const serviceOptions = {};
// Instance selector
function axios(configs, resolve, reject) {
    const req = serviceOptions.axios ? serviceOptions.axios.request(configs) : axiosStatic(configs);
    return req
        .then(res => {
        resolve(res.data);
    })
        .catch(err => {
        reject(err);
    });
}
function getConfigs(method, contentType, url, options) {
    const configs = { ...options, method, url };
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
    static productsTest(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/products-test';
            const configs = getConfigs('get', 'application/json', url, options);
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
    static products(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/products';
            const configs = getConfigs('get', 'application/json', url, options);
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
    static price(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/estimates/price';
            const configs = getConfigs('get', 'application/json', url, options);
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
    static time(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/estimates/time';
            const configs = getConfigs('get', 'application/json', url, options);
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
    static me(options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/me';
            const configs = getConfigs('get', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
    /**
     * User Activity
     */
    static history(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/history';
            const configs = getConfigs('get', 'application/json', url, options);
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
    static mapper(params = {}, options = {}) {
        return new Promise((resolve, reject) => {
            let url = '/crawler/v1/mapper/{mapper.id}';
            url = url.replace('{mapper.id}', params['mapperId'] + '');
            const configs = getConfigs('put', 'application/json', url, options);
            let data = null;
            configs.data = data;
            axios(configs, resolve, reject);
        });
    }
}
export var RoleType;
(function (RoleType) {
    RoleType["Admin"] = "Admin";
    RoleType["User"] = "User";
    RoleType["SetSms"] = "SetSms";
})(RoleType || (RoleType = {}));
export var EnumCreateOrUpdateUserInputUserRights;
(function (EnumCreateOrUpdateUserInputUserRights) {
    EnumCreateOrUpdateUserInputUserRights["View"] = "View";
    EnumCreateOrUpdateUserInputUserRights["Operate"] = "Operate";
    EnumCreateOrUpdateUserInputUserRights["Auth"] = "Auth";
    EnumCreateOrUpdateUserInputUserRights["Search"] = "Search";
    EnumCreateOrUpdateUserInputUserRights["Delete"] = "Delete";
    EnumCreateOrUpdateUserInputUserRights["UserManage"] = "UserManage";
    EnumCreateOrUpdateUserInputUserRights["UserConfig"] = "UserConfig";
    EnumCreateOrUpdateUserInputUserRights["SetTime"] = "SetTime";
    EnumCreateOrUpdateUserInputUserRights["SetNetwork"] = "SetNetwork";
    EnumCreateOrUpdateUserInputUserRights["SetSms"] = "SetSms";
    EnumCreateOrUpdateUserInputUserRights["SystemManage"] = "SystemManage";
})(EnumCreateOrUpdateUserInputUserRights || (EnumCreateOrUpdateUserInputUserRights = {}));
//# sourceMappingURL=index.js.map