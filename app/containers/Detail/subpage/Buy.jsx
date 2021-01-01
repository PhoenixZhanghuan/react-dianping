import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BuyAndStore from "../../../components/BuyAndStore";
import hashHistory from "react-router/lib/hashHistory";
import * as storeActionsFromFile from '../../../actions/store';

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
                <BuyAndStore
                    isStore={this.state.isStore}
                    buyHandle={this.buyHandle.bind(this)}
                    storeHandle={this.storeHandle.bind(this)}/>
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
        const loginFlag = this.loginCheck();
        if(!loginFlag) {
            return;
        }

        const {id} = this.props;
        const {storeActions} = this.props;

        if(this.state.isStore) {
            storeActions.rm({id : id})
        }else {
            storeActions.add({id : id})
        }

        this.setState({
            isStore: !this.state.isStore
        })

    }

    loginCheck() {
        const id = this.props.id;
        const {userinfo} = this.props;

        if(!userinfo.username) {
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id));
            return false;
        }
        return true;
    }

    componentDidMount() {
        this.checkStoreState()
    }

    checkStoreState() {
        const {id} = this.props;
        const {store} = this.props;

        store.some(item => {
            if(item.id === id) {
                this.setState({
                    isStore: true
                })
                return true;
            }
        })
    }

}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);