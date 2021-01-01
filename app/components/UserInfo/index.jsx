import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import "./style.less";

export default class UserInfo extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const {username, city} = this.props;
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"/>
                    &nbsp;
                    <span>{username}</span>
                </p>
                <p>
                    <i className="icon-map-marker" />
                    &nbsp;
                    <span>{city}</span>
                </p>
            </div>
        );
    }

}