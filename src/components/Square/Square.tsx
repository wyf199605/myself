import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Square.scss";

interface ISquarePara{
    value: string;
    onClick: Function;
}
interface ISquareState{
    value: string;
}
// 方块
export class Square extends React.Component<ISquarePara, ISquareState>{
    constructor(para: ISquarePara){
        super(para);
        this.state = {
            value: null
        }
    }

    render(){
        return <button className="square" onClick={() => this.props.onClick()}>
            {this.props.value}
        </button>
    }
}