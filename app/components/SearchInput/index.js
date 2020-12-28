import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import './style.less';
import {hashHistory} from "react-router";

export default class SearchInput extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ""
        }
    }

    render() {
        return (
            <input
                type="text"
                className="search-input"
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={this.changeHandle.bind(this)}
                onKeyUp={this.keyUpHandle.bind(this)}
            />
        );
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }

    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }

    keyUpHandle(e) {
        const {enterHandle} = this.props;
        if(e.keyCode !== 13) {
            return;
        }

        enterHandle && enterHandle(this.state.value);
    }

}