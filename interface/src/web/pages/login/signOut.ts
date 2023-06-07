/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-16 09:51:01
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-26 14:59:03
 */
import mittClass from '@assets/utils/mitt'
export function singout () {
    const storage=window.localStorage;
    storage.removeItem('userId')
    storage.removeItem('Uid')
    mittClass.emit('signout', false)
}