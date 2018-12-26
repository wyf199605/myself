import * as React from 'react';
import {MaskLayer} from "../maskLayer/maskLayer";
import "./modal.scss";
import {Button} from "../general/button/button";
import {Tools} from "../../utils/tools";

export interface IModal {
    isBackground?: boolean; // 是否有遮罩层，默认true
    isShow?: boolean; // 是否默认显示，默认false
    header?: IModalHeaderPara | string; // 设置模态框头部
    footer?: IModalFooterPara; // 设置模态框尾部
    width?: number;
    closeMsg?: string; // 关闭消息，默认无
}

interface IModalHeaderPara {
    title: string;
    isClose?: boolean;
    isLager?: boolean;
    isCenter?: boolean;
}

interface IModalFooterPara {
    rightPanel?: Button[] | React.ReactNode;
    leftPanel?: Button[] | React.ReactNode;
}

interface IModalState extends IModal {
    isFullScreen: boolean;
}

export class Modal extends React.Component<IModal, IModalState> {
    constructor(props: IModal) {
        super(props);
        this.state = Object.assign({
            isFullScreen: false
        }, props);
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps: IModal) {
        console.log(nextProps);
        this.setState(nextProps);
    }

    static defaultProps = {
        isBackground: true,
        isShow: false,
        width: 600,
        header: '提示'
    };

    protected closeModal() {
        this.setState({isShow: false})
    }

    protected fullScreen(){
        this.setState((prevState) => {
            return {
                isFullScreen: !prevState.isFullScreen
            }
        })
    }

    render() {
        let {
            isShow,
            isBackground,
            width,
            header,
            footer,
            isFullScreen
        } = this.state;

        if (typeof header === 'string') {
            header = {
                title: header
            }
        }

        return <>
            <div tabIndex={-1} style={{
                width: width + 'px',
                top: '30px'
            }} className={
                [
                    'modal-wrapper',
                    isShow ? null : 'hide',
                    isFullScreen ? 'full-screen-modal' : null
                ].join(' ')
            }>
                {Tools.isNotEmpty(header) ? <ModalHeader {...header} onClose={() => {
                    this.closeModal();
                }} onLager={() => {
                    this.fullScreen();
                }}/> : null}
                <div className="modal-body">
                    {this.props.children}
                </div>
                {Tools.isNotEmpty(footer) ? <ModalFooter {...footer}/> : null}
            </div>
            {isBackground ? <MaskLayer isShow={isShow} onClick={() => {
                this.closeModal();
            }}/> : null}
        </>
    }

    componentDidMount() {
        console.log('...');
    }
}

interface IModalHeader extends IModalHeaderPara {
    onClose?: Function;
    onLager?: Function;
}

class ModalHeader extends React.Component<IModalHeader> {
    constructor(props: IModalHeader) {
        super(props);
    }

    static defaultProps = {
        isClose: true,
        isLager: false,
        isCenter: false
    };

    render() {
        let {
            title,
            onClose,
            isClose,
            isLager,
            onLager,
            isCenter
        } = this.props;

        return <div className="modal-header">
            <div className={['modal-title', isCenter ? 'text-center' : null].join(' ')}>{title}</div>
            <div className="modal-control">
                {isLager ? <span className="glyphicon glyphicon-fullscreen" onClick={(e) => {
                    onLager && onLager(e)
                }}/> : null}
                {isClose ? <span className="glyphicon glyphicon-remove" onClick={(e) => {
                    onClose && onClose(e);
                }}/> : null}
            </div>
        </div>
    }
}

interface IModalFooter extends IModalFooterPara{

}

class ModalFooter extends React.Component<IModalFooter>{
    constructor(props: IModalFooter) {
        super(props);

    }

    render(){
        let {
            leftPanel,
            rightPanel
        } = this.props;

        return <div className="modal-footer">
            {Tools.isEmpty(leftPanel) ? null : <div className="footer-panel footer-left-panel">{leftPanel}</div>}
            {Tools.isEmpty(rightPanel) ? null : <div className="footer-panel footer-right-panel">{rightPanel}</div>}
        </div>
    }

}
