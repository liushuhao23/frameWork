/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-20 14:21:03
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-20 14:39:38
 */
import React, { useState, FC } from 'react'
import CodeMirrorCom from '@components/codemirror/index'
const TestCode: FC = () => {
    return (
      <div className='w-full h-full'>
        {/* <span>222</span> */}
        <CodeMirrorCom></CodeMirrorCom>
      </div>
    )
}
export default TestCode