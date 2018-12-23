import * as React from 'react';

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

    protected wrapper: HTMLElement;

    render() {
        console.log(this.props);
        return <div ref={(el) => this.wrapper = el} className="hello-wrapper">
            <h1 className="hello">Hello from {this.props.name}!</h1>
        </div>;
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidMount(){
        console.log(this.wrapper);
    }

    componentDidCatch(error: any, info: any){
        console.log(error, info);
    }
}

/*
* react 组件被实例化时，依次调用以下方法
*
* 1.getDefaultProps 获取组件传参参数；
* 2.getInitialState 初始化状态；
* 3.componentWillMount 组件将要创建；
* 4.render 调用render方法；
* 5.componentDidMount 组件完成创建；
*
* */

/*
* 组件存在时，更新调用的钩子函数
*
* 1.componentWillReceiveProps 组件的props可以通过父组件更改，此时会调用该方法；
* 2.shouldComponentUpdate 可以在该方法里返回false阻止后续渲染；
* 3.componentWillUpdate 组件将要更新；
* 4.render 调用render方法；
* 5.componentDidUpdate 组件完成更新；
*
* */

/*
* react 销毁时调用的钩子函数
*
* componentWillUnmount 组件销毁前触发
* */

