import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import './style.less';
import Item from "./item";
import {Link} from "react-router";

export default class List extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const {data} = this.props;
        return (
            <div className="list-container">
                {
                    data.map((item, index) => {
                        return (
                            <Link key={item.title + index}  to={'/detail/' + data.id} onlyActiveOnIndex>
                                <Item data={item}/>
                            </Link>
                        )
                    })
                }
            </div>
        );
    }

}