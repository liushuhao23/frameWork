/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-22 23:09:40
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-18 21:48:35
 */
import microApp, { unmountAllApps, unmountApp } from '@micro-zoe/micro-app'
import { getActiveApps, getAllApps  } from '@micro-zoe/micro-app'
import { unmountAppParams } from '@micro-zoe/micro-app/micro_app'
// @micro-zoe/micro-app/micro_app
import './communication'


microApp.start({
    lifeCycles: {
      created (e) {
        // console.log(e, '3')
        // console.log(`等待加载资源-${e?.detail.name}`)
      },
      beforemount (e) {
        // console.log(`等待渲染资源-${e?.detail.name}`)
      },
      mounted (e) {
        // console.log(`应用渲染结束-${e?.detail.name}`)
      },
      unmount (e) {
        console.log(`应用开始卸载-${e?.detail.name}`)
      },
      error (e) {
        console.log(e, `应用报错-${e?.detail.name}`)
      }
    }
})

class MicroAppFun {
    public instance: any
    // 获取正在运行的子应用
    getActiveAppsList () {
        return getActiveApps()
    }

    // 卸载子应用
    unmountAppFun ( appName: string, options?: unmountAppParams) {
        unmountApp(appName, {...options}).then(() => console.log('卸载成功'))
    }

    // 获取所有子应用
    getAllAppsList () {
        return getAllApps()
    }
    unmountAllAppsFun ( options?: unmountAppParams) {
        unmountAllApps({...options}).then(() => console.log('卸载成功'))
    }
}