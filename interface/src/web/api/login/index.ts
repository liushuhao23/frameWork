/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-03 11:06:15
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-28 15:32:56
 */
import { SignOutParams } from '@web/type/login/index'
import ApiBase, { AjaxReturnType } from '../../assets/http/api'
export interface AjaxReturn_AppInfo extends AjaxReturnType {
  data: any
}

class Login extends ApiBase {
  public url = {
    login: '/login',
    register: 'user/create',
    signOut: '/logout'
  }

  login (parmas: any): Promise<AjaxReturnType> {
    return this.post(this.url.login, parmas)
  }

  register (parmas: any): Promise<AjaxReturnType> {
    return this.post(this.url.register, parmas)
  }
  logout(params: SignOutParams ): Promise<AjaxReturnType> {
    return this.post(this.url.signOut, params)
  }
}

export default new Login()
