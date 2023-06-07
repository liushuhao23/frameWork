/*
 * @Description: description
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-11-09 14:31:04
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-11 16:45:17
 */
import { useState, FC } from 'react'
import * as React from 'react'
import { Form, Input, Button, Card, notification } from 'antd'
import { FrownOutlined } from '@ant-design/icons'
// import './App.css'

import Api from '@web/api/login/index'
import { Props } from '../../type/register'

interface Info {
  username: string;
  password: string;
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 }
}

const tailLayout = {
  wrapperCol: { offset: 5, span: 18 }
}

const Register: FC<Props> = (props: Props) => {
  //
  const [loading, setLoading] = useState(false)

  const onFinish = (values: Info) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    console.log(values)
    registerFun(values)
  }

  const onFinishFailed = () => {
    notification.open({
      message: '登陆失败',
      description: '请您完善表单！',
      icon: <FrownOutlined style={{ color: '#ff4d4f' }} />
    })
  }

  const goBack = () => {
    props.changeRegister(false)
  }

  const registerFun = (values: Info) => {
    console.log(values, 'kjjj')
    Api.register(values).then((res: any) => {
      console.log(res)
    })
  }

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Card>
      <Button type="link" onClick={goBack}>返回</Button>
        <Card.Grid style={{ width: '100%' }}>
          <Form
            {...layout}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            style={{ width: '480px', padding: '40px 0 0 20px' }}
          >
            <Form.Item
              label='账号'
              name='username'
              rules={[{ required: true, message: '请输入!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='密码'
              name='password'
              rules={[{ required: true, message: '请输入!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                loading={loading}
                type='primary'
                htmlType='submit'
                style={{ width: '100%' }}
              >
                注册
              </Button>
            </Form.Item>
          </Form>
        </Card.Grid>
      </Card>
    </div>
  )
}
export default Register
