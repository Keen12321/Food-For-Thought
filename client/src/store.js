import { createStore, combineReducers } from 'redux'

import appReducer from './reducers/appReducer.js'
import reportReducer from './reducers/reportReducer.js'

const rootReducer = combineReducers({
	appReducer: appReducer,
	reportReduce: reportReducer
})

const store = createStore(rootReducer)

export default store