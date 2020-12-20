import React from 'react'
import { render } from 'react-dom'

import './static/css/common.less'

import Hello from './containers/Hello';

render(
    <Hello/>,
    document.getElementById('root')
)
