import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import "./style.less";

export default class BuyAndStore extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <h1>
                buy and store
            </h1>
        );
    }

}