import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import ReactSwipe from 'react-swipe'

export default class Category extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <ReactSwipe >
                <div>PAGE 1</div>
                <div>PAGE 2</div>
                <div>PAGE 3</div>
            </ReactSwipe>
        );
    }

}