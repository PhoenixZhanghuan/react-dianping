import React, {Component} from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

export default class Header extends Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <p>{this.props.title}</p>
        );
    }

}