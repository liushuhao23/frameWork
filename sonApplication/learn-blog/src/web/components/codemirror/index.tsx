/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-09-20 14:16:05
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-20 14:46:44
 */
import React, { useState, FC } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
// import 'codemirror/lib/codemirror.css';
// // 主题风格 可以自己定义
// import 'codemirror/theme/blackboard.css';

// require('codemirror/mode/javascript/javascript');
const CodeMirrorCom: FC = () => {
  const change = (editor: any, data: any, value: any) => {
    console.log(editor, 'editor', data, 'data', value, 'value')
  }
  return (
      <CodeMirror
        value="<h1>I ♥ react-codemirror2</h1>"
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true,
        }}
        onChange={change}
      />
  );
};
export default CodeMirrorCom;
