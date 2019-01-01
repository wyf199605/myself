import * as React from 'react';
import {TextInput} from "../../components/form/textInput/textInput";
import {Button} from "../../components/general";
import {Modal} from "../../components/modal";

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
            <div>
                <Button disabled={false} text="show" onClick={() => {
                    this.setState({isShow: true})
                }}/>
            </div>
            <div>
                <Button disabled={false} text="show" type="primary"/>
            </div>
            <div>
                <Button disabled={false} text="show" type="info"/>
            </div>
            <div>
                <Button disabled={false} text="show" type="success"/>
            </div>
            <div>
                <Button disabled={false} text="show" type="danger"/>
            </div>
            <div>
                <Button disabled={false} text="show" type="link"/>
            </div>
            <Modal isOnceRender={false} isShow={this.state.isShow} isBackground={true} header={{
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
        Modal.confirm({
            msg: 'aaaa',
            onClick: (flag) => {
                console.log(flag);
            }
        });
    }
}