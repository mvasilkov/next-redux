'use strict'

import { combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { appWithRedux } from 'next-redux'

import reducers from '../reducers'

const reducer = combineReducers(reducers)
const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default appWithRedux(reducer, enhancer)
