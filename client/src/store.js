import { createStore, combineReducers } from 'redux'

//import reducers here
import appReducer from './reducers/appReducer'

const rootReducer = combineReducers({
	//put reducers
	appReduce: appReducer
})

const store = createStore(rootReducer)

export default store
