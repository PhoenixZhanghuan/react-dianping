import React from 'react';

export default class C extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.changeUserInfo.bind(this)}>修改</button>
            </div>
        )
    }

    changeUserInfo() {
        const actions = this.props.actions;
        actions.login({
            userid: '123',
            city: 'nanjing'
        })
    }
}