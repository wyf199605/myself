import * as React from 'react';
import {modalAlert, modalConfirm} from "./modalAlert";
import Util from "../__utils";
import {MaskLayer} from "../maskLayer";
import {Button} from "../general";

const tools = Util.tools;

export interface IModal {
    isBackground?: boolean; // 是否有遮罩层，默认true
    isShow?: boolean; // 是否默认显示，默认false
    header?: IModalHeaderPara | string; // 设置模态框头部
    footer?: IModalFooterPara; // 设置模态框尾部
    width?: number;
    closeMsg?: string; // 关闭消息，默认无
    isAnimated?: boolean // 是否有动画，默认true
    className?: string,
    isOnceRender?: boolean;
    top?: number;
    onClose?: Function;
    onLager?: Function;
    zIndex?: number;
}

interface IModalHeaderPara {
    title: string;
    isClose?: boolean;
    isLager?: boolean;
}

interface IModalFooterPara {
    rightPanel?: React.ReactElement<Button>[] | React.ReactNode;
    leftPanel?: React.ReactElement<Button>[] | React.ReactNode;
}

interface IModalState extends IModal {
    isFullScreen: boolean;
    isRender: boolean;
}

let modals: Modal[] = [];

export class Modal extends React.Component<IModal, IModalState> {
    protected static isBindGlobalKeyDown = false;

    constructor(props: IModal) {
        super(props);
        this.state = Object.assign({
            isFullScreen: false,
            isRender: true,
        }, props);

        if (!Modal.isBindGlobalKeyDown) {
            Modal.isBindGlobalKeyDown = true;
            document.body.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.keyCode === 27) {
                    let modal = modals[0];
                    modal && modal.closeModal();
                }
            })
        }
    }

    componentWillReceiveProps(nextProps: IModal) {
        this.setState((prevState) => {
            let isRender = prevState.isRender;
            if (prevState.isOnceRender && !prevState.isShow) {
                isRender = false;
            }
            return Object.assign({isRender}, nextProps);
        });
    }

    protected wrapper: HTMLElement;

    static defaultProps = {
        isBackground: true,
        isShow: false,
        width: 600,
        header: '提示',
        isAnimated: true,
        isOnceRender: false,
        top: 30,
        zIndex: 1000
    };

    protected closeModal() {
        this.setState((prevState) => {
            return {
                isShow: false,
                isRender: !prevState.isOnceRender
            }
        });
        let index = modals.indexOf(this);
        if (~index) {
            modals.splice(index, 1);
        }
        let handler = this.props.onClose;
        handler && handler();

    }

    protected fullScreen() {
        this.setState((prevState) => {
            return {
                isFullScreen: !prevState.isFullScreen
            }
        });
        let handler = this.props.onLager;
        handler && handler();
    }

    exitHandler(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    }

    render() {
        let {
            isShow,
            isBackground,
            width,
            header,
            footer,
            isFullScreen,
            isAnimated,
            className,
            isRender,
            top,
            zIndex
        } = this.state;

        if (typeof header === 'string') {
            header = {
                title: header
            }
        }

        if (isShow) {
            modals.unshift(this);
        }
        return isRender ? <>
        <div tabIndex={-1} ref={(el) => {
            this.wrapper = el;
        }} onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
            this.exitHandler(e);
        }} style={{
            width: width + 'px',
            top: top + 'px',
            zIndex: zIndex
        }} className={
            [
                'modal-wrapper',
                className,
                isShow ? null : 'hide',
                isFullScreen ? 'full-screen-modal' : null,
                isAnimated ? 'animation' : null,
            ].filter((className) => tools.isNotEmpty(className)).join(' ')
        }>
            {tools.isNotEmpty(header) ? <ModalHeader {...header} onClose={() => {
                this.closeModal();
            }} onLager={() => {
                this.fullScreen();
            }}/> : null}
            <div className="modal-body">
                {this.props.children}
            </div>
            {tools.isNotEmpty(footer) ? <ModalFooter {...footer}/> : null}
        </div>
        {isBackground ? <MaskLayer isShow={isShow} zIndex={zIndex - 1} onClick={() => {
            this.closeModal();
        }}/> : null}
        </> : null;
    }

    componentDidMount() {
    }

    static alert = modalAlert;

    static confirm = modalConfirm;
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
        } = this.props;

        return <div className="modal-header">
            <div className={['modal-title'].join(' ')}>{title}</div>
            <div className="modal-control">
                {isLager ? <span className="iconfont icon-zuidahua" onClick={(e) => {
                    onLager && onLager(e)
                }}/> : null}
                {isClose ? <span className="iconfont icon-close" onClick={(e) => {
                    onClose && onClose(e);
                }}/> : null}
            </div>
        </div>
    }
}

interface IModalFooter extends IModalFooterPara {

}

class ModalFooter extends React.Component<IModalFooter> {
    constructor(props: IModalFooter) {
        super(props);

    }

    render() {
        let {
            leftPanel,
            rightPanel
        } = this.props;

        return <div className="modal-footer">
            {tools.isEmpty(leftPanel) ? null : <div className="footer-panel footer-left-panel">{leftPanel}</div>}
            {tools.isEmpty(rightPanel) ? null : <div className="footer-panel footer-right-panel">{rightPanel}</div>}
        </div>
    }

}
