import * as React from 'react';
const file = require('../../images/test.jpg');

export interface IHelloProp{
    name: string;
    data?: obj;
}

interface IState{

}

export class Hello extends React.Component<IHelloProp, IState> {
    constructor(props: IHelloProp){
        super(props);
    }

    render() {
        console.log(this.props);
        return <div className="hello-wrapper">
            <h1 className="hello">Hello from {this.props.name}!</h1>
            <img src={file} alt=""/>
        </div>;
    }
}