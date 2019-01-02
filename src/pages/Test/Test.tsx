import * as React from 'react';
import {Button} from "../../components/general";
import {Modal} from "../../components/modal";
import {TextInput} from "../../components/form";
import {Spinner} from "../../components/spinner";

export class Test extends React.Component<{}, obj>{
    constructor(props: obj){
        super(props);
        this.state = {
            val: '1',
            isShow: true,
            disabled: false
        }
    }

    render(){
        return <div>
            <Spinner/>
            <TextInput isStyle={false} icon="search" iconPosition="right" defaultValue={this.state.val} onSet={(val) => {
                this.setState({val})
            }}/>
            <div>
                <Button disabled={false} text="show" onClick={() => {
                    this.setState({isShow: true})
                }}/>
            </div>
            <div>
                <Button icon={'search'} disabled={this.state.disabled} text="" type="primary"/>
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
                <Button disabled={false} text="isDisabled" type="link" onClick={() => {
                    Modal.confirm({
                        msg: 'aaaa',
                        onClick: (flag) => {
                            this.setState({disabled: flag});
                            console.log(flag);
                        }
                    });
                }}/>
            </div>
            <Modal isOnceRender={false} isShow={this.state.isShow} onClose={() => {
                this.setState({isShow: false});
            }
            } isBackground={true} header={{
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