/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-01 09:14:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-20 14:47:21
 */
import App from '@pages/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import 'antd/dist/antd.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror.js';
// import './wdyr';
const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
