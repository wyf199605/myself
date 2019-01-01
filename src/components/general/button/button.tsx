import * as React from 'react';
import './button.scss';
import Util from "../../__utils";

const tools = Util.tools;

export interface IButton {
    text: string;
    onClick?: Function;
    disabled?: boolean;
    btnType?: 'button' | 'submit' | 'reset';
    type?: 'primary' | 'default' | 'success' | 'info' | 'danger' | 'link';
    size?: 'lg' | 'sm' | 'xs';
    isBlock?: boolean;
    icon?: string;
}

interface IButtonState {

}

export class Button extends React.Component<IButton, IButtonState> {

    constructor(props: IButton) {
        super(props);

    }

    static defaultProps = {
        btnType: 'button',
        type: 'default',
        disabled: false,
        isBlock: false
    };

    render() {
        let {
            type,
            size,
            isBlock,
            disabled,
            onClick,
            text,
            icon,
            btnType
        } = this.props;
        return <button type={btnType} className={
            [
                'btn',
                'btn-' + type,
                size && 'btn-' + size,
                isBlock ? 'btn-block' : ''
            ].filter((item) => tools.isNotEmpty(item)).join(' ')
        } disabled={disabled} onClick={
            (e) => {
                onClick && onClick(e);
            }
        }>
            {tools.isEmpty(icon) ? null : <span className={'iconfont icon-' + icon}/>}
            <span>{text}</span>
            </button>
    }
}