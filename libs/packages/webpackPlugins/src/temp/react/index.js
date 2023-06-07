/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-07 16:51:12
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-10-17 14:36:04
 */
const reactRender = (name) => {
  const temp = `
  import React, { useState, FC } from 'react'
  import CodeMirrorCom from '@components/codemirror/index'
  interface Props {
    getValFun: (val: string) => void
  }

  const ${name}: FC<Props> = (props: Props): JSX.Element => {
      const [value, setValue] = useState('')
      const getVal = (val: string) => {
        props.getValFun(val)
      }
      return (
        <div className='w-full h-full'>
         <CodeMirrorCom value={value} getVal={getVal}></CodeMirrorCom>
        </div>
      )
  }
  export default  ${name}`
  return temp
}

module.exports = { reactRender }
