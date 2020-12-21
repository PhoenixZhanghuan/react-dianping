import React from 'react'

export default class B extends React.Component {

    render() {
        return (
            <p>
                {this.props.userinfo.city}
            </p>
        );
    }

}