import { combineReducers } from 'redux';

// import all reducers
import auth from './auth';
import destinasi from './destinasi';

// combine them
const appReducer = combineReducers({
    auth,
    destinasi

})

export default appReducer;