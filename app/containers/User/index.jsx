import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

export default class User extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                User
            </div>
        );
    }

}