/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-14 17:34:26
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-16 21:51:41
 */
import microApp from '@micro-zoe/micro-app';

type SonConfig = { appName: string, callBack: any }

export function communication(data: SonConfig[]) {
    data.forEach(item => {
        microApp.addDataListener(`${item.appName}`, item.callBack, true);
    });
}

