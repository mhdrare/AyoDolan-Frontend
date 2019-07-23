import { combineReducers } from 'redux';

// import all reducers
import user from './user';

// combine them
const appReducer = combineReducers({
    user,

})

export default appReducer;