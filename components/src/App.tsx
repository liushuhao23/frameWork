/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-05-25 13:13:21
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-04 22:10:16
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';

// import  ButtonCom from '../package/components/Button/Index'
import { ButtonCom } from  './components/index'


function App() {
  return (
    <div className="App " >
      <header className='rbg-red-500 App-heade'>
        <ButtonCom variant="contained"></ButtonCom>
      </header>
    </div>
  );
}

export default App;
