import * as React from 'react';
import {TextInput} from "../../components/form/textInput/textInput";

export class Test extends React.Component<{}, {val: string}>{
    constructor(props: obj){
        super(props);
        this.state = {
            val: '1'
        }
    }

    render(){
        return <div>
            <TextInput defaultValue={this.state.val} onSet={(val) => {
                console.log(val);
                this.setState({val})
            }}/>
        </div>
    }
}