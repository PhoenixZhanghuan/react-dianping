import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import HomeHeader from "../../components/HomeHeader";
import {connect} from "react-redux";
import Category from "../../components/Category";
import Ad from "./subpage/Ad";
import List from "./subpage/List";

class Home extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category />
                <div style={{height: '15px'}}/>
                <Ad />
                <List cityName={this.props.userinfo.cityName} />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);