import * as React from 'react';
import {TextInput} from "../../components/form/textInput/textInput";
import {Modal} from "../../components/modal/modal";

export class Test extends React.Component<{}, obj>{
    constructor(props: obj){
        super(props);
        this.state = {
            val: '1',
            isShow: true
        }
    }

    render(){
        return <div>
            <TextInput defaultValue={this.state.val} onSet={(val) => {
                console.log(val);
                this.setState({val})
            }}/>
            <Modal isShow={this.state.isShow}>aaa</Modal>
        </div>
    }

    componentDidMount(){

    }
}