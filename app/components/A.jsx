import React from 'react'

export default class A extends React.Component {

    render() {
        return (
            <p>
                {this.props.userinfo.userid}
            </p>
        );
    }

}