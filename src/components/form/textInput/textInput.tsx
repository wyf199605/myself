import * as React from 'react';
import {FormCom, IFormComPara, IFormComState} from "../basic";

interface ITextInput extends IFormComPara {
    type?: 'text' | 'password';
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
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
        type: 'text'
    };

    protected input: HTMLInputElement;

    changeHandler(ev: React.ChangeEvent<HTMLInputElement>) {
        let value = ev.target.value;
        this.setState({value});
        this.props.onSet && this.props.onSet(value);
    }

    render() {
        return <div className="text-wrapper">
            <input type={this.props.type}
                   placeholder={this.props.placeholder}
                   disabled={this.props.disabled}
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