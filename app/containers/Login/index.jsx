import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userInfoActionsFromOtherFile from "../../actions/userinfo";
import hashHistory from "react-router/lib/hashHistory";
import Header from "../../components/Header";
import LoginComponent from '../../components/Login';

class Login extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: true
        }
    }

    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    this.state.checking
                        ? <div>等待中</div>
                        : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        );
    }

    /**
     * 登录成功之后的处理
     * @param username
     */
    loginHandle(username) {
        const actions = this.props.userInfoActions;
        let {userinfo} = this.props;
        userinfo.username = username;
        actions.update(userinfo)

        const {params} = this.props;
        const router = params.router;
        if(router) {
            hashHistory.push(router)
        }else {
            this.goUserPage();
        }
    }

    componentDidMount() {
        this.doCheck();
    }

    doCheck() {
        const {userinfo} = this.props;
        if(userinfo.username) {
            this.goUserPage();
        }else {
            this.setState({
                checking: false
            })
        }

    }

    goUserPage() {
        hashHistory.push('/User');
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions : bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);