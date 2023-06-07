/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-05 14:48:28
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-19 14:32:20
 */
import { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate, NavigateFunction } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { MenuItemStatic } from '@web/type/menu';
const list = require('@web/menu/index')

const { Header, Content, Sider } = Layout;

let menuData: MenuProps['items'] = [];

type MenuData = Required<MenuProps>['items'][number];

const dealMenuData = <T extends MenuItemStatic[],>(menuData: T): void => {
  console.log('222')
  const aa = (menuData: T) => {
    if (menuData?.length) {
      for ( let i = 0; i < menuData.length; i++) {
        menuData[i].label = menuData[i]?.name
        menuData[i].key = menuData[i].value
        if (menuData[i]?.children?.length) {
          aa(menuData[i]?.children as T)
        }
      }
    }
  }
  aa(menuData as T)
}
dealMenuData(list)

menuData = list;

export const WorkContent: FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  const [initKey, setKey] = useState<string[]>(['']);
  const [BreadList, setBreadList] = useState<any>([{
    name: '首页',
    path: ''
  },
  {
    name: '首页1',
    path: ''
  }
])
  const checkedMenu = (item: any) => {
    console.log(item, '333')
    setKey(item.key);
    navigate(item.key, { state: { item: item.key } });
  };
  useEffect(() => {
    console.log(menuData, 'list');
  }, []);
  return (
    <Layout>
      <Header className="header">
        <div className="logo" style={{ color: '#ffffff' }}>
          <span>标题</span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={initKey}
            selectedKeys={initKey}
            defaultOpenKeys={[]}
            onSelect={(item: any) => checkedMenu(item)}
            style={{ height: '100%', borderRight: 0 }}
            items={ menuData }
          />
        </Sider>
        <Layout style={{ padding: 15 }}>
          <Breadcrumb style={{ margin: '16px 0px 16px 16px' }}>
            {BreadList.map((item: any) => {
              return <Breadcrumb.Item key={item.path} >{item.name}</Breadcrumb.Item>
            })} 
          </Breadcrumb>
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
