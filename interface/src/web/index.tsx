/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-01 09:14:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-25 18:24:20
 */
import App from '@pages/App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import microApp from '@micro-zoe/micro-app'
import './micro-app/index'
import 'antd/dist/antd.css';
import './style.css';

const container = document.getElementById('app')!;
const root = createRoot(container);
root.render(<App />);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
