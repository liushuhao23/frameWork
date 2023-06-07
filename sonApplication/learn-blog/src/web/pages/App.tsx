/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-06-28 23:23:42
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-09-20 14:46:59
 */
import { useRoutes } from 'react-router-dom';
import routes from '../routers';
import './App.css';

const App = (): JSX.Element => {
  const routing = useRoutes(routes);
  return <div className="app">{routing}</div>;
};
export default App;
