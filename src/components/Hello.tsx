import * as React from 'react';

export interface IHelloProp{
    name: string;
}

export class Hello extends React.Component<IHelloProp, {}> {
    constructor(props: IHelloProp){
        super(props);
    }
    render() {
        return <h1>Hello from {this.props.name}!</h1>;
    }
}