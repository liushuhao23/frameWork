/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-13 14:04:58
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-13 14:06:25
 */
function dataListener (data: any) {
    console.log('来自基座应用的数据', data)
}
(window as any).microApp.addDataListener(dataListener, true)