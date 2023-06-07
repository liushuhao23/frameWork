/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2022-06-28 19:14:46
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-07-07 17:03:52
 */
function Home() {
    return (
      <div>
        <h2>vue3</h2>
        <micro-app name='app2' url='http://localhost:3002/' baseroute='/vue3'></micro-app>
        {/* <micro-app name='app2' url='http://localhost:3002/' baseroute='/my-page'></micro-app> */}
      </div>
    );
  }
  
  export default Home;