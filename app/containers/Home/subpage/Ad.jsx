import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import {getAdData} from '../../../fetch/home/home.js';
import HomeAd from "../../../components/HomeAd";

export default class Ad extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data}/>
                        : <div>加载中...</div>
                }
            </div>
        );
    }

    componentDidMount() {
        getAdData().then((res) => {
            return res.json();
        }).then((json) => {
            if (json.length) {
                this.setState({data: json})
            }
        })

    }

}