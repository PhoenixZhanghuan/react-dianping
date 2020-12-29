import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import {bindActionCreators} from "redux";
import * as userInfoActionsFromOtherFile from "../../../actions/userinfo";
import {connect} from "react-redux";
import BuyAndStore from "../../../components/BuyAndStore";
import hashHistory from "react-router/lib/hashHistory";

class Buy extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }

    render() {
        return (
            <div>
                <BuyAndStore  isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
            </div>
        );
    }

    buyHandle() {
        const loginFlag = this.loginCheck();
        if(!loginFlag) {
            return;
        }

        hashHistory.push('/User');
    }

    storeHandle() {

    }

    loginCheck() {
        const id = this.props.id;
        const {userinfo} = this.props;

        if(!userinfo.username) {
            hashHistory.push('/Login/' + encodeURIComponent('/detail/') + id);
            return false;
        }
        return true;
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
)(Buy);