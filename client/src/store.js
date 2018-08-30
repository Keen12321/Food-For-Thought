import { createStore, combineReducers } from 'redux'

//import reducers here
import appReducer from './reducers/appReducer.js'

const rootReducer = combineReducers({
	//put reducers
	appReducer
})

const store = createStore(rootReducer)

export default store
