/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-25 18:42:18
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-25 23:05:11
 */
import { UserInfo } from '@web/type/user'
import { makeAutoObservable } from 'mobx'

 class useMobxStore {
  userInfo: UserInfo = {
    userName: '',
    id: '',
    createTime: ''
  } // 初始化状态数据
  
  constructor() {
    // 对初始化数据进行响应式处理
    makeAutoObservable(this)
  }

  // 设置改变初始化数据方法
  addUserInfo = (val: UserInfo) => { 
    this.userInfo = val
  }
}

export default new useMobxStore()