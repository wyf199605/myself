import * as React from 'react';
import { Route, Redirect, Switch,  } from 'react-router';
import {Hello} from "./pages/Hello/Hello";
import {Board} from "./pages/Board/Board";
import {Test} from "./pages/Test/Test";
import {LoginPage} from "./pages/index/login";
import {HomePage} from "./pages/home/home";

export class AppRouter extends React.Component{
    render(){
        return <>
        <Switch>
            <Route exact path="/" component={Hello}/>
            <Route path="/board" component={Board}/>
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
