/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-26 22:40:11
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-27 00:01:39
 */
import mitt from "mitt";

export const emitter = mitt<any>();

export const GLOBAL_STORE_CHANGE = 'GLOBAL_STORE_CHANGE'