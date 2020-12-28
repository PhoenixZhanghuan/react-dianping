import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import "./style.less";

const CITY_LIST = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安'];

export default class CityList extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>
                    城市列表
                </h3>
                <ul className="clear-fix">
                    {
                        CITY_LIST.map((item, index) =>
                            <li key={item + index}>
                                {
                                    <span onClick={this.clickHandle.bind(this, item)}>{item}</span>
                                }
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }

    clickHandle(newCity) {
        const {changeFn} = this.props;
        changeFn && changeFn(newCity);
    }

}