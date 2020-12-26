import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as userInfoActionsFromOtherFile from "../../actions/userinfo";
import Header from "../../components/Header";
import CurrentCity from "../../components/CurrentCity";
import CityList from '../../components/CityList';
import localStore from '../../util/localStore'
import {CITYNAME} from "../../config/localStoreKey";
import { hashHistory } from 'react-router'

class City extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName} />
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        );
    }

    changeCity(newCity) {
        if(newCity == null) {
            return;
        }

        const {userinfo, userInfoActions} = this.props;
        userinfo.cityName = newCity;
        userInfoActions.update(userinfo);

        localStore.setItem(CITYNAME, newCity);
        // 跳转页面
        hashHistory.push('/')

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
)(City);