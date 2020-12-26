import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import './style.less';
import {Link} from 'react-router';

export default class HomeHeader extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
                    <i className="icon-user"/>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search" />
                        <input type="text" placeholder="请输入关键字" />
                    </div>
                </div>
            </div>
        );
    }

}