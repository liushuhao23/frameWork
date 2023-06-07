/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-19 14:21:18
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-19 14:28:05
 */
type MenuItemStatic  = {
    name: string
    label: string
    key: string
    value: string
    parent: string
    type?: string
    icon?: React.ReactNode,
    children?: MenuItemStatic[]
}
export { MenuItemStatic }