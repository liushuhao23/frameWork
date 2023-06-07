/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-08-10 22:11:37
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-12-06 23:26:38
 */
import { useState, useCallback, FC, useEffect, memo } from 'react';
import * as React from 'react';
import { Form, Input, Button, Card, notification } from 'antd';
import { FrownOutlined, PhoneOutlined, WechatOutlined } from '@ant-design/icons';
import Register from '../register/register';

import Api from '@web/api/login/index';
import { Props, LoginPros } from '@web/type/login/login';
import mittClass from '@assets/utils/mitt';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite'
import store from '@web/store/user'
import { setLocalStorage } from '@assets/utils/utils';



const defaultAppName = process.env.defaultAppName;
console.log(defaultAppName, 'defaultAppName');

interface Info {
  username: string;
  password: string;
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 5, span: 18 },
};

const getJwt = () => {
  const storage = window.localStorage;
  if (storage.userId) {
    return true;
  } else {
    return false;
  }
};

const setJwt = (val: string) => {
  const storage = window.localStorage;
  storage.userId = val;
};

const LoginForm: FC = memo(() => {
  const [loading, setLoading] = useState(false);
  const navigate: NavigateFunction = useNavigate();

  const onFinish = (values: Info) => {
    // setLoading(true)
    loginFun(values);
  };

  const loginFun = (val: Info) => {
    Api.login(val).then(res => {
      if (res.success) {
        store.addUserInfo(res.data.userInfo)
        setLocalStorage('Uid', res.data.userInfo.id)
        setJwt(res.data.access_token);
        navigate(`/${defaultAppName}`, { state: { appName: defaultAppName, userInfo: res.data.userInfo } });
      }
    });
  };
  const onFinishFailed = () => {
    notification.open({
      message: '登陆失败',
      description: '请您完善表单！',
      icon: <FrownOutlined style={{ color: '#ff4d4f' }} />,
    });
  };

  const register = () => {
    // props.changeRegister(true)
  };

  useEffect(() => {
    const loginFlag = getJwt();
    if (loginFlag) {
      navigate(`/${defaultAppName}`, { state: { appName: defaultAppName } });
    }
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Card>
        <Card.Grid style={{ width: '100%' }}>
          <Form
            {...layout}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: '480px', padding: '40px 0 0 20px' }}
          >
            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <div className="flex items-center">
                <div>
                  <Button style={{ paddingLeft: '0px' }} onClick={register} type="link">
                    没有账号，点此注册
                  </Button>
                </div>
                <div className="flex absolute right-1">
                  <WechatOutlined className="mr-2 text-base cursor-pointer" />
                  <PhoneOutlined className="text-base cursor-pointer" />
                </div>
              </div>
              <Button loading={loading} type="primary" htmlType="submit" style={{ width: '100%' }}>
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card.Grid>
      </Card>
    </div>
  );
});

const LoginContent: FC = () => {
  const [registerFlag, setRegister] = useState(true);

  return (
    <div className="login">
      {<LoginForm></LoginForm>}
      {/* {
        !registerFlag ? <LoginForm  /> : <Register changeRegister={changedRegisterFun} />
      } */}
    </div>
  );
};

export default memo(observer(LoginContent));
