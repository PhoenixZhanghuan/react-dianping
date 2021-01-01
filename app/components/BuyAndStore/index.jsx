import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import "./style.less";

export default class BuyAndStore extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const {isStore} = this.props;
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        isStore
                            ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>
                            : <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>购买</button>
                </div>
            </div>
        );
    }

    storeClickHandle() {
        const {storeHandle} = this.props;
        storeHandle && storeHandle();
    }

    buyClickHandle() {
        const {buyHandle} = this.props;
        buyHandle && buyHandle();
    }

}