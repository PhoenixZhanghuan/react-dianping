import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import {getInfoData} from "../../../fetch/detail/detail";
import DetailInfo from "../../../components/DetailInfo";

export default class Info extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.info
                        ? <DetailInfo  data={this.state.info}/>
                        : ''
                }
            </div>
        );
    }
    
    componentDidMount() {
        const {id} = this.props;
        const result = getInfoData(id)
        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                info: json
            })
        })
    }


}