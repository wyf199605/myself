import * as React from 'react';
import {FormCom, IFormComPara, IFormComState} from "../basic";

interface ITextInput extends IFormComPara {
    type?: 'text' | 'password';
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    isStyle?: boolean;
    icon?: string;
    iconPosition?: 'left' | 'right';
    iconClick?: Function;
}

interface ITextInputSate extends IFormComState {
    value: string;
}

export class TextInput extends FormCom<ITextInput, ITextInputSate> {
    constructor(props: ITextInput) {
        super(props);
        this.state = {
            value: props.defaultValue || ''
        }
    }

    static defaultProps = {
        placeholder: '',
        readonly: false,
        disabled: false,
        type: 'text',
        isStyle: true,
        iconPosition: 'left'
    };

    protected input: HTMLInputElement;

    changeHandler(ev: React.ChangeEvent<HTMLInputElement>) {
        let value = ev.target.value;
        this.setState({value});
        this.props.onSet && this.props.onSet(value);
    }

    render() {
        let {
            type,
            disabled,
            placeholder,
            isStyle,
            icon,
            iconPosition,
            iconClick
        } = this.props;

        return <div className={
            [
                'text-wrapper',
                disabled ? 'disabled' : null,
                isStyle ? null : 'text-space'
            ].filter((className) => className).join(' ')
        }>
            <span className={'input-icon input-icon-' + iconPosition} onClick={() => {
                iconClick && iconClick();
            }}>
                <span className={"iconfont icon-" + icon}/>
            </span>
            <input type={type}
                   placeholder={placeholder}
                   disabled={disabled}
                   ref={(element) => {
                       this.input = element;
                       // this.input.readOnly = this.props.readonly;
                   }}
                   value={this.state.value}
                   onChange={(ev) => {
                       this.changeHandler(ev);
                   }}
            />
        </div>;
    }

}