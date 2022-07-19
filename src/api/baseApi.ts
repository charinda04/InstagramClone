import { HttpMethods } from '@src/shared/enums';
import axiosInstance from './axiosInstance';

interface QueryParams {
  [key: string]: string | number | boolean | undefined;
}

export default class BaseApi {
  protected async getAsync<T>(endPoint: string, queryStringParameters?: QueryParams): Promise<T> {
    return this.executeAsync<T>(HttpMethods.Get, endPoint, queryStringParameters, undefined);
  }

  protected async postAsync<T>(endPoint: string, queryStringParameters?: QueryParams, data?: {}): Promise<T> {
    return this.executeAsync<T>(HttpMethods.Post, endPoint, queryStringParameters, data);
  }

  protected async putAsync<T>(endPoint: string, queryStringParameters?: QueryParams, data?: {}): Promise<T> {
    return this.executeAsync<T>(HttpMethods.Put, endPoint, queryStringParameters, data);
  }

  protected async patchAsync<T>(endPoint: string, queryStringParameters?: QueryParams, data?: {}): Promise<T> {
    return this.executeAsync<T>(HttpMethods.Patch, endPoint, queryStringParameters, data);
  }

  protected async deleteAsync<T>(endPoint: string, queryStringParameters?: QueryParams, data?: {}): Promise<T> {
    return this.executeAsync<T>(HttpMethods.Delete, endPoint, queryStringParameters, data);
  }

  protected async executeAsync<T>(method: HttpMethods, endPoint: string, queryStringParameters?: QueryParams, data?: {}): Promise<T> {
    const axiosPromise = await axiosInstance.request<T>({
      method,
      url: endPoint,
      params: queryStringParameters,
      data,
    });
    // axios request configurations allows to set a validateStatus function.
    // `validateStatus` defines whether to resolve or reject the promise for a given
    // HTTP response status code.
    // if `validateStatus` returns `true` (or is set to `null` or `undefined`),
    // the promise will be resolved;
    // otherwise, the promise will be rejected.
    // default implementation is as below.
    // validateStatus: function (status) {
    //  return status >= 200 && status < 300; // default
    // },

    // code execution reached here means request resolved with data.
    // callers of this method should be written in a
    // try catch block to handle rejections.
    return axiosPromise.data;
  }
}
