import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import "./style.less";
import {debounce} from '../../util/common'

export default class LoadMore extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>

        );
    }

    loadMoreHandle() {
        this.props.loadMoreFn();
    }

    componentDidMount() {
        window.addEventListener(
            'scroll',
            debounce(this.scrollHandle.bind(this), 50),
            false);
    }

    scrollHandle() {
        const {loadMoreFn, isLoadingMore} = this.props;
        const {wrapper} = this.refs;
        if (isLoadingMore) {
            return;
        }
        const top = wrapper && wrapper.getBoundingClientRect().top;
        const windowHeight = window.screen.height;
        if (top && top < windowHeight) {
            loadMoreFn && loadMoreFn();
        }
    }

}