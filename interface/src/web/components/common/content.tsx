/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-05 14:48:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-11-28 17:11:05
 */
import { FC, useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate, NavigateFunction } from 'react-router-dom';
import { Dropdown, MenuProps, Space, Typography } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import appInfo from '../../../../config/appDataInfo';
import { getActiveApps } from '@micro-zoe/micro-app';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom'
import Api from '@web/api/login/index';
import { getLocalStorage } from '@assets/utils/utils';
import { singout } from '@pages/login/signOut';


const { Header, Content, Sider } = Layout;

const menuData: MenuProps['items'] = [];

appInfo.appDataInfo.forEach(item => {
  menuData.push({
    key: item.code,
    label: (
      <Link style={{ color: '#ffffff' }} to={item.code}>
        {item.name}
      </Link>
    ),
  });
});

const WorkContent: FC = (): JSX.Element => {
  const location = useLocation()
  const { state }: any = location

  const [initKey, setKey] = useState<string[]>([]);
  const items: MenuProps['items'] = [
    {
      key: 'update',
      label: '编辑个人资料',
    },
    {
      key: 'logout',
      label: '退出',
    }
  ];
  const checkedMenu = (item: any) => {
    setKey(item.key);
  };
  const onClick = async(val: any) => {
    if (val.key === 'logout') {
      await logoutFun()
    }
  }

  const logoutFun = async () => {
    const userId = getLocalStorage('Uid')
    const res = await Api.logout({userId: userId})
    if (res.success) {
      singout()
    }
    return ''
  }
  useEffect(() => {
    if (state) {
      setKey([state.appName])
    }
  }, [state]);
  return (
    <Layout>
      <Header className="header " style={{ padding: '0px' }}>
        <div className='flex' style={{ backgroundColor: '#28243d' }}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={initKey}
            selectedKeys={initKey}
            defaultOpenKeys={['2']}
            onSelect={(item: any) => checkedMenu(item)}
            style={{ height: '100%', borderRight: 0, color: '#ffffff', backgroundColor: '#28243d' }}
            items={menuData}
          />
          
        <div className="cursor-pointer" style={{ position: 'absolute', right: '40px' }}>
          <Dropdown
            menu={{
              items,
              selectable: true,
              onClick,
              defaultSelectedKeys: ['3'],
            }}
          >
            <Typography.Link>
              <Space>
                <Avatar icon={<UserOutlined />} />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
        </div>

      </Header>
      <Layout>
        <Layout style={{ padding: 0 }}>
          <Content
            className="site-layout-background"
            style={{
              minHeight: 280,
              overflow: 'auto',
            }}
          >
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default WorkContent;
