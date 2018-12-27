import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {AppRouter} from "./router";
const getConfirmation = (message: string, callback: Function) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
};

class App extends React.Component {
    render() {
        return <BrowserRouter getUserConfirmation={getConfirmation}>
            <div>
                <AppRouter/>
            </div>
        </BrowserRouter>
    }

    componentDidCatch(error: any, info: any) {
        console.log(error, info);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);





