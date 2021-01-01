import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import hashHistory from "react-router/lib/hashHistory";
import {bindActionCreators} from "redux";
import * as userInfoActionsFromOtherFile from "../../actions/userinfo";
import {connect} from "react-redux";
import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import OrderList from "./subpage/OrderList";

class User extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const {userinfo} = this.props;
        const {username, cityName} = userinfo;
        return (
            <div>
                <Header title="用户中心" backRouter="/"/>
                <UserInfo username={username} city={cityName}/>
                <OrderList username={username}/>
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.userinfo.username) {
            hashHistory.push('/Login');
        }
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);