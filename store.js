import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = preloadState => {
    // Root reducer
    const userReducer = (state = null, action) => ({ user: null })
    const rootReducer = combineReducers({ userReducer })

    // For middlewares
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    // For enhancers
    const enhancers = [middlewareEnhancer]

    // Add dev tool
    const composedEnhancers = composeWithDevTools(...enhancers)

    return createStore(rootReducer, preloadState, composedEnhancers)
}

export default configureStore