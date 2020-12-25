import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import "./style.less";

export default class LoadMore extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="load-more">
                <span>加载更多</span>
            </div>

        );
    }

}