import { combineReducers } from 'redux';

// import all reducers
import auth from './auth';

// combine them
const appReducer = combineReducers({
    auth,

})

export default appReducer;