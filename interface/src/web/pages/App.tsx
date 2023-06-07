/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-06-28 23:23:42
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-12-06 17:51:23
 */
import './App.css';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useRoutes, useNavigate } from 'react-router-dom';
import routes from '../routers';
import { singout } from './login/signOut';
import Login from '@pages/login/login';
import mittClass from '@assets/utils/mitt';
import appInfo from '../../../config/appDataInfo';
import { communication } from '@web/micro-app/communication';
import Api from '@web/api/user/index';
import store from '@web/store/user';
const { appDataInfo } = appInfo;
console.log('已经注册的子应用', appDataInfo);
const defaultAppName = process.env.defaultAppName;

const getJwt = () => {
  const storage = window.localStorage;
  if (storage.userId) {
    return true;
  } else {
    return false;
  }
};

const sonDataCallback = (val: any) => {
  if (val?.signout) {
    console.log('开始登出');
    singout();
  }
};

const sonCommunicationConfig: any = [];

appDataInfo.forEach(item => {
  sonCommunicationConfig.push({
    appName: item.code,
    callBack: sonDataCallback,
  });
});
communication(sonCommunicationConfig);

const getUserInfo = () => {
  const flag = getJwt();
  if (flag) {
    const storage = window.localStorage;
    Api.getUserInfo({ userId: storage.Uid }).then(res => {
      if (res.success) {
        store.addUserInfo(res.data);
      }
    });
  }
};

const App = (): JSX.Element => {
  const routing = useRoutes(routes);
  let location = useLocation();
  const navigate = useNavigate();

  const singoutCallBack = () => {
    singoutFun();
  };

  const [data, setData] = useState({
    name: '',
    age: ''
  })

  const singoutFun = () => {
    const loginFlag = getJwt();
    if (!loginFlag) {  
      navigate('/login');
    }
  };

  useEffect(() => {
    setData((val) => {
      console.log(val, ';')
      return val
    })
  }, [])

  useEffect(() => {
    const loginFlag = getJwt();
    if (location.pathname === '/' && loginFlag) {
      navigate(`/${defaultAppName}`, { state: { appName: defaultAppName } });
    }
  }, [location]);

  useEffect(() => {
    mittClass.on('signout', singoutCallBack);
    singoutFun();
    // getUserInfo();
  }, []);

  return <div className="app">{routing}</div>;
};
export default App;
