import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";

export default class List extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const {cityName} = this.props;
        return (
            <h1>
                list subpage {cityName}
            </h1>
        );
    }

    componentDidMount() {

    }

}