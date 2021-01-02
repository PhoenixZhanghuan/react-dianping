import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import "./style.less";
import {getOrderListData, postComment} from "../../../fetch/user/orderlist";
import OrderListComponent from '../../../components/orderList'

export default class OrderList extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                        ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                        : ''
                }
            </div>
        );
    }

    componentDidMount() {
        const {username} = this.props;
        if (username) {
            this.loadOrderList(username);
        }
    }

    loadOrderList(username) {
        getOrderListData(username).then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error("用户订单'订单列表'获取数据报错, ", ex.message);
            }
        })
    }

    submitComment(id, value, callback) {
        postComment(id, value).then(res => {
            return res.json();
        }).then((json) => {
            if(json.errno === 0) {
                callback();
            }
        })
    }
}