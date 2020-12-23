import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import HomeHeader from "../../components/HomeHeader";

export default class Home extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <HomeHeader />
            </div>
        );
    }

}