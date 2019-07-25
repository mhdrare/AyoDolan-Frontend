import { combineReducers } from 'redux';

// import all reducers
import auth from './auth';
import destinasi from './destinasi';
import paket from './paket';
import order from './order';

// combine them
const appReducer = combineReducers({
    auth,
    destinasi,
    paket,
    order

})

export default appReducer;