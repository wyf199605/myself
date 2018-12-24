import * as React from 'react';
import { Route, Redirect, Switch,  } from 'react-router';
import {Hello} from "./pages/Hello/Hello";
import {Board} from "./pages/Board/Board";

export class AppRouter extends React.Component{
    render(){
        return <>
        <Switch>
            <Route exact path="/" component={Hello}/>
            <Route path="/board" component={Board}/>
            <Route component={Hello}/>
        </Switch>
        </>;
    }

    componentDidCatch(error: any, info: any){
        console.log(error, info);
    }
}
