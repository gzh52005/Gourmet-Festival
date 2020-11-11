// import logo from './logo.svg';
import React, { lazy, Suspense } from "react";
import './css/reset.css';

import {HashRouter,BrowserRouter as Router,Route,Redirect,Switch,Link,NavLink, withRouter} from 'react-router-dom';

// import { Menu,Row, Col ,Button} from 'antd';

//路由懒加载的实现：异步载入资源
//import AuthRoute from "./permission"; //路由守卫
import NavBar from "./components/navBar";

const Indexpage = lazy(() => import("./views/index/index"));
const MenuPage = lazy(() => import("./views/menu"));

const LoginPage = lazy(() => import("./views/login"));
const Userspage = lazy(() => import("./views/users"));

// function App() {
//   return (
//     <div className="App">
//       <Button type="primary">按钮</Button>
//     </div>
 
//   );
// }

// export default App;

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <React.Fragment>
        <Router>
          {/* 导航条 */}
          <NavBar />
       
          <React.Fragment>
            <Suspense fallback={<div>loading</div>}>
              {/* 路由用的的组件一般放在pages或views里面 */}

              {/* <Route path="/" exact component={Indexpage}></Route> */}
              <Route path="/home" component={Indexpage}></Route>
              <Route
                path="/"
                exact
                render={() => <Redirect to="/home" />}
              ></Route>
                {/* 菜单管理 */}
              <Route path="/menu" component={MenuPage}></Route>
              {/* 登录路由 */}
              <Route path="/login" component={LoginPage}></Route>
              {/* 用户管理 */}
              <Route path="/users" component={Userspage}></Route>
              {/* <AuthRoute path="/users" component={Userspage}></AuthRoute> */}
            
              {/* 子路由设置方式一:设置一个子路由 */}
              {/* 传参方式一:动态路由，这种方式适合用于传输简单的数据 */}
              {/* <Route
              path="/goods/type/:id/:title"
              component={GoodsDetail}
            ></Route> */}
             
              {/* <Route path="/goods/type/three" component={Goodsxxx}></Route> */}
              {/* 子路由设置方式二 */}
              {/* <Route
              path="/goods"
              render={() => (
                <GoodsPage>
                  <Route path="/goods/type/:id" component={GoodsDetail}></Route>
                </GoodsPage>
              )}
            ></Route> */}
            </Suspense>
          </React.Fragment>
        </Router>
      </React.Fragment>
      </div>
    );
  }
}

export default App;



