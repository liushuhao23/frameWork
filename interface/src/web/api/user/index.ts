/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-03 11:06:15
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-25 23:10:57
 */
import { SignOutParams } from '@web/type/login/index'
import ApiBase, { AjaxReturnType } from '../../assets/http/api'
export interface AjaxReturn_AppInfo extends AjaxReturnType {
  data: any
}

class User extends ApiBase {
  public url = {
    getUserInfo: '/user/userInfo'
  }

  getUserInfo (parmas: any): Promise<AjaxReturnType> {
    return this.post(this.url.getUserInfo, parmas)
  }
}

export default new User()
