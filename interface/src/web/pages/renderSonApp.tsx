/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-06-28 19:14:46
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-28 17:13:53
 */
/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event';
import { useLocation } from 'react-router-dom';
import { AppData } from 'web/type/global';
import { Spin } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import microApp from '@micro-zoe/micro-app'
import { communication } from '@web/micro-app/communication';
import { observer } from 'mobx-react-lite'
import store from '@web/store/user'

type workSpace = {
  jwt: string,
}

const getJwt = (): string => {
  const storage=window.localStorage;
  if(storage.userId) {
    return storage.userId
  } else {
    return ''
  }
}


const collectData = (): workSpace => {
  return {
    jwt: getJwt()
  }
}



function renderSonApp(props: { infoData: AppData }) {
  const { infoData } = props;

  const [loading, setLoading] = useState(false);
  
  const created = () => {
    setLoading(true);
  };

  const mounted = () => {
    setLoading(false);
  };
  const unmount = () => {
    setLoading(true);
  };

  
  useEffect(() => {
    microApp.setData(`${infoData.code}`, Object.assign(collectData(), {userInfo: store.userInfo}) )
  }, [infoData.code, store.userInfo] )

  useEffect(() => {
    microApp.setData(`${infoData.code}`, collectData())
  }, [])


  return (
    <Spin spinning={loading} tip="应用加载中，请稍后" size="large">
      <div style={{height:'100%'}}>
        <micro-app
          name={infoData.code}
          url={infoData.url}
          style={{height:'100%'}}
          baseroute={`${infoData.baseroute}`}
          onCreated={() => created}
          onMounted={() => mounted()}
          onUnmount={() => unmount()}
          // data={workSpace}
          // onDataChange={sonDataChange}
        ></micro-app>
      </div>
    </Spin>
  );
}

export default observer(renderSonApp);
