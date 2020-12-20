import React, {Component} from 'react';

export default class Header extends Component {

    render() {
        return (
            <p>{this.props.title}</p>
        );
    }

}