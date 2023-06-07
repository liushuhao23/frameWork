/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-06 20:14:16
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-06 20:28:53
 */

import { clg } from "./console"


// is String
export function isString(target: unknown): target is string {
    return typeof target === 'string'
}

export function logError(
    msg: unknown,
    ...rest: unknown[]
): void {
    clg('magenta', `[Plugin-Conversion-Error] ${msg}`, ...rest)
    // console.error(`[plugin-Conversion] ${msg}`, ...rest)
}
logError('111', {name: 'sss'})