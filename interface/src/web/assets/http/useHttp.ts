/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-25 16:17:45
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-28 17:13:07
 */
import { AxiosRequestConfig } from 'axios';
const storage = window.localStorage;

export const settingHttpHeaders = (requestConfig: any,): AxiosRequestConfig => {
  requestConfig.headers['Authorization'] = `Bearer ${storage.userId}`
  return requestConfig;
}
