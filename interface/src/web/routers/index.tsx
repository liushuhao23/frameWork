/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-01 09:14:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-12-06 17:30:03
 */

import Loading from '@components/Loading';
import MainLayout from '@layouts/MainLayout';
import appInfo from '../../../config/appDataInfo';

import { lazy, Suspense } from 'react';
// const Home = lazy(() => import('@pages/Home'));
import RenderSonApp from '@pages/renderSonApp';
import NoMatch from '@components/common/noMatch'

import { RouteObject } from 'react-router-dom';

const Courses = lazy(() => import('@pages/Courses'));
const Vue3 = lazy(() => import('@pages/vue3'));
const defaultAppName = process.env.defaultAppName;

// const Login = lazy(() => import('@web/pages/login/login'));
import Login from '@web/pages/login/login'

import CanvasCom from '@pages/canvas/index'

const Routes: RouteObject[] = [];
const Layout = () => (
  <Suspense fallback={<Loading />}>
    <MainLayout />
  </Suspense>
);


const mainRoutes: any = [
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      { path: 'canvas', element: <CanvasCom /> },
      { path: '*', element: () => import('@components/common/noMatch') },
    ],
  },
  {
    path: '/login',
    element: <Login></Login>,
  }
];

appInfo.appDataInfo.forEach((item, index) => {
    const target: any = {
      path: `${item.code}/*`,
      element: <RenderSonApp infoData = {item}/>,
    }
    if (item.code === defaultAppName) {
      target.index = true
    }
    mainRoutes[0].children.unshift(target)
});

Routes.push(...mainRoutes);
export default Routes;
