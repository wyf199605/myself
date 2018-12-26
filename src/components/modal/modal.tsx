import * as React from 'react';
import {MaskLayer} from "../maskLayer/maskLayer";
import "./modal.scss";

export interface IModal {
    isBackground?: boolean; // 是否有遮罩层，默认true
    isShow?: boolean; // 是否默认显示，默认false
    header?: IModalHeader | string;
    width?: number;
}

interface IModalHeaderPara{
    title: string;
    isClose?: boolean;
    isLager?: boolean;
}

interface IModalState extends IModal{
}

export class Modal extends React.Component<IModal, IModalState>{
    constructor(props: IModal) {
        super(props);
        this.state = Object.assign({}, props);
        console.log(this.state);
    }

    componentWillReceiveProps(nextProps: IModal){
        console.log(nextProps);
        this.setState(nextProps);
    }

    static defaultProps = {
        isBackground: true,
        isShow: false,
        width: 600,
        header: '提示'
    };

    protected maskClick(){
        this.setState({isShow: false})
    }

    render(){
        let {
            isShow,
            isBackground,
            width,
            header
        } = this.state;

        if(typeof header === 'string'){
            header = {
                title: header
            }
        }

        return<>
        <div tabIndex={-1} style={{
            width: width + 'px',
            top: '30px'
        }} className={
            [
                'modal-wrapper',
                isShow ? null : 'hide'
            ].join(' ')
        }>
            <ModalHeader {...header}/>
            {this.props.children}
        </div>
        {isBackground ? <MaskLayer isShow={isShow} onClick={() => {
            this.maskClick();
        }}/> : null}
        </>
    }

    componentDidMount(){
        console.log('...');
    }
}

interface IModalHeader extends IModalHeaderPara{
    onClose?: Function;
}

class ModalHeader extends React.Component<IModalHeader>{
    constructor(props: IModalHeader){
        super(props);
    }

    render(){
        let {
            title,
            onClose,
            isClose
        } = this.props;

        return <div className="modal-header">
            <div className="modal-title">{title}</div>
            <div className="modal-control">
                {isClose ? <span className="glyphicon glyphicon-remove" onClick={(e) => {
                    onClose(e);
                }}/> : null}
            </div>
        </div>
    }
}