import * as React from "react";
import * as ReactDOM from "react-dom";
import {Square} from "../Square/Square";
import "./Board.scss";

interface IBoardPara{

}

interface IBoardState{
    squares: string[];
    xIsNext: boolean;
}

// 棋盘
export class Board extends React.Component<IBoardPara, IBoardState>{
    constructor(para: IBoardPara){
        super(para);
        this.state = {
            squares: Array.from({length: 9}, () => null),
            xIsNext: true,
        }
    }

    protected isEnd: boolean = false;

    renderSquare(i: number): React.ReactElement<Square>{
        return <Square value={this.state.squares[i]} onClick={() => {this.handleClick(i)}}/>;
    }

    handleClick(index: number){
        const squares: string[] = this.state.squares.slice();
        if(!squares[index] && !this.isEnd){
            squares[index] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                xIsNext: !this.state.xIsNext
            });
        }
    }

    static calculateWinner(squares: string[]): string {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    replay(){
        this.setState({
            squares: Array.from({length: 9}, () => null),
            xIsNext: true,
        });
        this.isEnd = false;
    }

    render(){
        const winner = Board.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = '胜利者：' + winner;
            this.isEnd = true;
        } else {
            status = '下一个：' + (this.state.xIsNext ? 'X' : 'O');
            if(this.state.squares.every((str) => !!str)){
                status = '游戏结束'
            }
        }

        return <div className="board-wrapper">
            <div>{status}</div>
            <div className="board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
            <div>
                <button onClick={() => {this.replay()}}>新游戏</button>
            </div>
        </div>
    }
}