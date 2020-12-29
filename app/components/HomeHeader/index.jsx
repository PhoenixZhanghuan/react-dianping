import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import './style.less';
import {hashHistory, Link} from 'react-router';
import SearchInput from "../SearchInput";

export default class HomeHeader extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            kwd: ""
        }
    }

    render() {
        return (
            <div id="home-header" className='clear-fix'>
                <div className="home-header-left float-left">
                    <Link to="/city" onlyActiveOnIndex>
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down" />
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/Login" onlyActiveOnIndex>
                        <i className="icon-user"/>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search" />
                        &nbsp;
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }

    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }



}