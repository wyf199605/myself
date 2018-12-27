import * as React from 'react';
import {TextInput} from "../../components/form/textInput/textInput";
import {Modal} from "../../components/modal/modal";
import {BtnGroup} from "../../components/general/btnGroup/btnGroup";
import {Button} from "../../components/general/button/button";

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
            <Button text="show" onClick={() => {
                this.setState({isShow: true})
            }}/>
            <Modal isShow={this.state.isShow} isBackground={true} header={{
                title: '提示',
                isLager: true
            }} footer={{
                rightPanel: [
                    <Button text="确定" key={1}/>,
                    <Button text="取消" key={2} onClick={() => {
                        this.setState({isShow: false})
                    }}/>,
                ]
            }}>aaa</Modal>
        </div>
    }

    componentDidMount(){

    }
}