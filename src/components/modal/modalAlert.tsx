import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from "../general/button/button";
import {Modal} from "./modal";

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
            rightPanel: <Button isBlock={true} text="确定" onClick={() => {
                onClick && onClick();
                closeModal();
            }}/>
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
