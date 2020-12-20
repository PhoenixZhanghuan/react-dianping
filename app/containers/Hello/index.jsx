import React, {Component} from "react";

import Header from '../../components/Header';
import Carousel from './subpage/Carousel';
import Recommend from './subpage/Recommend';
import List from './subpage/List';

export default class Hello extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            now: Date.now()
        }
    }

    render() {
        return (
            <div>
                <Header title="hello页面"/>
                <p onClick={this.clickHandler.bind(this)}>hello world {this.state.now}</p>
                <hr />
                <Carousel />
                <Recommend />
                <List />
            </div>
        );
    }

    clickHandler() {
        this.setState({
            now: Date.now()
        })

    }

}