import React, { lazy, Suspense } from "react";

//路由懒加载的实现：异步载入资源
//import AuthRoute from "./permission"; //路由守卫
import {
    BrowserRouter as Router,
    Route,
    HashRouter,
    Link,
    Redirect,
  } from "react-router-dom";

//路由懒加载的实现：异步载入资源
//import AuthRoute from "./permission"; //路由守卫

const Home = lazy(() => import("../index/index"));
const Menu = lazy(() => import("../menu"));
const Login = lazy(() => import("../login"));
const Users = lazy(() => import("../users"));

 

class Daughter  extends React.Component {
  render() {
    return <div>
     
      <Suspense fallback={<div>loading</div>}>

      <Route path="/home" component={Home}></Route>
      <Route path="/menu" component={Menu}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/user" component={Users}></Route>

      </Suspense>
     

    </div>;
  }
}

export default Daughter;
