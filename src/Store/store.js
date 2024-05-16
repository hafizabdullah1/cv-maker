import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {getUserReducer, getDataReducer} from '../Reducers/reducer'


const rootReducer = combineReducers({
    storeData: getDataReducer,
    user : getUserReducer
})

const middleware = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store;