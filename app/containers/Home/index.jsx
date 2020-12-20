import React from 'react';
import {Link} from "react-router";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div>Home</div>
                <Link to="/list" onlyActiveOnIndex>to list</Link>
            </div>
        )
    }
}
