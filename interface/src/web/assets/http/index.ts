/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-10-17 09:47:25
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-28 17:00:09
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { UtilsTools } from '../utils/utilsTools'
import { message } from 'antd'
import { settingHttpHeaders } from "./useHttp";
import { singout } from '@pages/login/signOut';
// const isDev = process.env.NODE_ENV === 'development'
const { API_HOST } = process.env

const storage = window.localStorage;

const Http = axios.create({
  baseURL: API_HOST || '/', // api请求的baseURL
  timeout: 600000,
  withCredentials: true, // 允许跨域 cookie
  headers: {
    'Content-Type': 'application/json',
    'Authorization':  `Bearer ${storage.userId}`
},
  maxContentLength: 2000
})
// 请求拦截器
Http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return settingHttpHeaders(config)
  },
  (err: AxiosRequestConfig) => Promise.reject(err)
)
Http.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200 || response.status === 201) {
      if (
        response.config.responseType === 'blob' ||
        response.config.responseType === 'arraybuffer'
      ) {
        return new Promise((resolve) => {
          const result = UtilsTools.dealBlob(response)
          result.then((data: any) => {
            if (!data.success) {
              message.error(data.errMessage || '')
            } else {
              resolve(data)
            }
          })
        })
      }
      if (response.data.code === '802' || response.data.code === 802) {
        window.location.href = `${response.data.errMessage}`
        return
      }
      if (!response.data.success) {
        message.error(response.data.errMessage || '')
      }
      return response.data
    }
    if (response.status === 400) {
      message.error(response.data.errMessage || '')
    }
  },
  (err: {
    response: AxiosResponse
  } ) => {
      if (err.response.status === 401) {
          singout();
          // window.microApp.dispatch({ signout: true })
          // window.eventCenterForAppalgorithm.dispatch(params)
      } else {
          message.error('服务器错误，错误代码500！')
      }
      Promise.reject(err)
      return { success: false }
  }
  // (err: any) => {
  //   console.log(err, 'err')
  //   const { response } = err
  //   message.error(response.data.message)
  //   Promise.reject(err)
  //   return { success: false }
  // }
)
export { Http }
