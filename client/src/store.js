import { createStore, combineReducers } from 'redux'
import appReducer from './reducers/appReducer.js'
// import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
	 appReduce: appReducer
})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
