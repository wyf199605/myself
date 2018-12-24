import * as React from 'react';
import './button.scss';
import {Tools} from "../../utils/tools";

export interface IButton {
    text: string;
    onClick?: Function;
    disabled?: boolean;
    btnType?: 'button' | 'submit';
    type?: 'primary' | 'default' | 'success' | 'info' | 'danger' | 'link';
    size?: 'lg' | 'sm' | 'xs';
    isBlock?: boolean;
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
        let props: IButton = this.props;
        return <button className={
            [
                'btn',
                'btn-' + props.type,
                props.size && 'btn-' + props.size,
                props.isBlock ? 'btn-block' : ''
            ].filter((item) => Tools.isNotEmpty(item)).join(' ')
        } disabled={props.disabled} onClick={
            (e) => {
                props.onClick && props.onClick(e);
            }
        }>{this.props.text}</button>
    }
}