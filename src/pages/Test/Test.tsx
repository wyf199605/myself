import * as React from 'react';
import {Button} from "../../components/general";
import {Modal} from "../../components/modal";
import {TextInput} from "../../components/form";
import {Spinner} from "../../components/spinner";
import {Menu} from "../../components/menu";

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
            <Menu onClick={(key) => {
                console.log(key);
            }}>
                {
                    [
                        <Menu.item name={'a'} key={'a'} title="菜单1">
                            <Menu.item name={'aa'} title="子菜单1"/>
                            <Menu.item name={'ab'} title="子菜单2"/>
                        </Menu.item>,
                        <Menu.item name={'b'} key={'b'} title="菜单2">
                            <Menu.item name={'ba'} title="子菜单1"/>
                            <Menu.item name={'bb'} title="子菜单2"/>
                        </Menu.item>
                    ]
                }
            </Menu>
        </div>
    }

    componentDidMount(){
    }
}