import {createStore} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
}