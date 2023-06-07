/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-26 14:56:20
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-28 15:31:49
 */
export const setLocalStorage = (name: string, value: string) => {
    const storage = window.localStorage;
    storage[name] = value;
}

export const getLocalStorage = (name: string) => {
    return window.localStorage[name]
} 