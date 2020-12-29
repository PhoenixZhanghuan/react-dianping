import React from 'react';
import {IndexRoute, Route, Router} from "react-router";
import App from "../containers";
import Home from "../containers/Home/index.jsx";
import City from "../containers/City/index.jsx";
import User from "../containers/User/index.jsx";
import Search from "../containers/Search/index.jsx";
import Detail from "../containers/Detail/index.jsx";
import NotFound from "../containers/404";
import Login from "../containers/Login";

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/User' component={User}/>
                    <Route path='/search/:category(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='/Login(/:router)' component={Login}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
