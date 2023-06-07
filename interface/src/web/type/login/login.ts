/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-09 14:48:29
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-11 17:22:08
 */
type Props = {
    changeRegister: (val: boolean) => void
}

type LoginPros = {
    changedLogin: (val: boolean) => void 
}

export type { Props, LoginPros }
