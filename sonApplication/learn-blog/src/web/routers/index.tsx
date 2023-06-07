/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-07-01 09:14:34
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-20 14:35:32
 */

import Loading from '@components/Loading';
import MainLayout from '@layouts/MainLayout';
import appInfo from '../../../config/appDataInfo';

import { lazy, Suspense } from 'react';
// const Home = lazy(() => import('@pages/Home'));
import RenderSonApp from '@pages/renderSonApp';
import NoMatch from '@components/common/noMatch'  

import { RouteObject } from 'react-router-dom';

import childrenRouters from './children/index'

import Test1 from '../pages/testCode'

const Courses = lazy(() => import('@pages/Courses'));
const Vue3 = lazy(() => import('@pages/vue3'));


const Routes: RouteObject[] = [];
const Layout = () => (
  <Suspense fallback={<Loading />}>
    <MainLayout />
  </Suspense>
);


const mainRoutes: any = {
  path: '/',
  element: <Layout />,
  children: [
    { index: true, element: <RenderSonApp infoData = {appInfo.appDataInfo[0]}/> },
    { path: '*', element: <NoMatch /> },
    { path: 'test1', element: <Test1 />}
  ],
};

// appInfo.appDataInfo.forEach((item, index) => {
//     const target: any = {
//       path: `${item.code}/*`,
//       element: <RenderSonApp infoData = {item}/>,
//     }
//     mainRoutes.children.unshift(target)
// });
mainRoutes.children.push(...childrenRouters)
console.log(mainRoutes, 'mainRoutes')


Routes.push(mainRoutes);
export default Routes;
