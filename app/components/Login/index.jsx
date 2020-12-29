import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import "./style.less";

export default class Login extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            phone: ""
        }
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"/>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandle.bind(this)}
                        value={this.state.phone}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"/>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        );
    }

    changeHandle(e) {
        this.setState({
            phone: e.target.value
        })
    }

    clickHandle() {
        const username = this.state.phone;
        const {loginHandle} = this.props;
        loginHandle && loginHandle(username);
    }

}