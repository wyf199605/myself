import * as React from 'react';
const file = require('../../images/test.jpg');

export interface IHelloProp{
    name: string;
    data?: obj;
}

export class Hello extends React.Component<IHelloProp, {}> {
    constructor(props: IHelloProp){
        super(props);
    }

    render() {
        return <div className="hello-wrapper">
            <h1 className="hello">Hello from {this.props.name}!</h1>
            <img src={file} alt=""/>
        </div>;
    }
}