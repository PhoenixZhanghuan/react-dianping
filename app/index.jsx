import React from 'react'
import { render } from 'react-dom'

// 通用样式
import './static/css/common.less'
import {hashHistory} from 'react-router';
import RouteMap from './router/routeMap';

render(
    <RouteMap hashHistory={hashHistory}/>,
    document.getElementById('root')
)
