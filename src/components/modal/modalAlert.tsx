import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Modal} from "./modal";
import {Button, IButton} from "../general";
import Util from "../__utils";

const tools = Util.tools;

export function modalAlert(msg: any, title: string = '提示', onClick?: Function) {
    let div = document.createElement('div');

    if (msg instanceof Object || Array.isArray(msg)) {
        msg = JSON.stringify(msg);
        //去掉json字符串头尾的引号
        if (msg[0] && msg[0] === '"' && msg[msg.length - 1] && msg[msg.length - 1] === '"') {
            msg = msg.slice(1, msg.length - 1);
        }
    }

    ReactDOM.render(
        <Modal isOnceRender={true} top={100} onClose={() => {
            closeModal();
        }}
               isShow={true} width={260} header={{
            title: title,
            isClose: true,
        }} className="modal-alert" footer={{
            rightPanel: [<Button key="confirm" isBlock={true} text="确定" onClick={() => {
                onClick && onClick();
                closeModal();
            }}/>]
        }}>{msg}</Modal>,
        div
    );

    document.body.appendChild(div);

    function closeModal() {
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        div = null;
    }
}

interface IConfirmBtn{
    isClose?: boolean;
    text: string;
    onClick?: Function;
}

export interface IConfirm {
    msg: string;
    title?: string;
    onClick?: (flag: boolean) => void;
    btns?: {
        left: IConfirmBtn;
        right: IConfirmBtn;
    }
}

export function modalConfirm (props: IConfirm) {
    let {
        msg,
        title,
        onClick,
        btns
    } = props,
        leftBtn,
        rightBtn;

    if(tools.isEmpty(title)){
        title = '提示';
    }
    if(tools.isEmpty(btns)){
        leftBtn = <Button text="取消" isBlock={true} onClick={() => {
            onClick && onClick(false);
            closeModal();
        }
        }/>;
        rightBtn = <Button text="确定" isBlock={true} onClick={() => {
            onClick && onClick(true);
            closeModal();
        }
        }/>;
    }else{
        let {
            right,
            left
        } = btns;

        leftBtn = <Button text={left.text} isBlock={true} onClick={() => {
            let onClick = left.onClick;
            onClick && onClick();
            if(tools.isEmpty(left.isClose) || left.isClose){
                closeModal();
            }
        }
        }/>;
        rightBtn = <Button text={right.text} isBlock={true} onClick={() => {
            let onClick = right.onClick;
            onClick && onClick();

            if(tools.isEmpty(right.isClose) || right.isClose){
                closeModal();
            }
        }
        }/>;

    }


    let div = document.createElement('div');
    ReactDOM.render(
        <Modal isOnceRender={true} top={100} onClose={() => {
            onClick && onClick(false);
        }}
               isShow={true} width={260} header={{
            title: title,
            isClose: true,
        }} className="modal-confirm" footer={{
            leftPanel: leftBtn,
            rightPanel: rightBtn
        }}>{msg}</Modal>,
        div
    );

    document.body.appendChild(div);

    function closeModal(){
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
        div = null;
    }
}
