import * as React from 'react';
import './login.scss';
import {Button} from "../../components/general";
import {TextInput} from "../../components/form";

interface ILoginState {
    password: string;
    username: string
}

export class LoginPage extends React.Component<{}, ILoginState>{
    constructor(props: obj){
        super(props);
        this.state = {
            password: '',
            username: ''
        }
    }

    render(){
        console.log(this.props);
        return <div className="login-page">
            <header className="login-header">

            </header>
            <section className="login-content">
                <TextInput placeholder="密码"
                           readonly={false}
                           type="password"
                           onSet={(value) => {
                               console.log(value);
                           }}
                />
                <Button text="登陆"
                        type="primary"
                        onClick={() => {
                            console.log('a');
                        }}
                        isBlock={true}
                />
            </section>
        </div>
    }
}