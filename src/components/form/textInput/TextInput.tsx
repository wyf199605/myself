import * as React from 'react';
import {FormCom, IFormComPara, IFormComState} from "../basic";

interface ITextInputPara extends IFormComPara{
    type?: 'text' | 'password';
}

interface ITextInputSate extends IFormComState{
    value: string;
}

export class TextInput extends FormCom<ITextInputPara, ITextInputSate>{
    constructor(props: ITextInputPara) {
        super(props);
        this.state = {
            value: props.defaultValue || ''
        }
    }

    protected input: HTMLInputElement;

    changeHandler(){

    }

    render(){
        return <div className="text-input-wrapper">
            <input ref={(element) => this.input = element}
                   defaultValue={this.props.defaultValue || ''}
                   onChange={() => {this.changeHandler()}}
                   type={this.props.type || 'text'}/>
        </div>
    }

}