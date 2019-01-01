import * as React from 'react';
import { Route, Redirect, Switch, Prompt } from 'react-router';
import {Hello} from "./pages/Hello/Hello";
import {Test} from "./pages/Test/Test";
import {LoginPage} from "./pages/index/login";
import {HomePage} from "./pages/home/home";

export class AppRouter extends React.Component{
    render(){
        return <>
        <Switch>
            <Route exact path="/" component={Hello}/>
            <Route path="/my-test" component={Test}/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/home" component={HomePage}/>
            <Route component={Hello}/>
        </Switch>
        </>;
    }

    componentDidCatch(error: any, info: any){
        console.log(error, info);
    }
}

/*
* Prompt
*
* 该组件主要作用是,在用户准备离开该页面时, 弹出提示
* 返回true或者false, 如果为true, 则离开页面, 如果为false, 则停留在该页面
* */

/*
* Switch
*
* 渲染与位置匹配的第一个子元素<Route> 或 <Redirect>
* 只会渲染一个Route
* */
