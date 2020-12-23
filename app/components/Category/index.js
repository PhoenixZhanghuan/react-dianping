import React from 'react';
import PureRenderMixin from "react-addons-pure-render-mixin";
import ReactSwipe from 'react-swipe'

export default class Category extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }

    render() {
        const opt = {
            auto: 2000,
            callback: (index) => {
                this.setState({index})
            }
        };
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>
                        <ul>
                            <li>家政</li>
                            <li>家政</li>
                            <li>家政</li>
                            <li>家政</li>
                            <li>家政</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>家政</li>
                            <li>家政</li>
                            <li>家政</li>
                            <li>家政</li>
                            <li>家政</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>火锅</li>
                            <li>火锅</li>
                            <li>火锅</li>
                            <li>火锅</li>
                            <li>火锅</li>
                        </ul>
                    </div>
                    <div>
                        <ul>

                        </ul>
                    </div>
                </ReactSwipe>
                <div>
                    {this.state.index}
                </div>
            </div>
        );
    }

}