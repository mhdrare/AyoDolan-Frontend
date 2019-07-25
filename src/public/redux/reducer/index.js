import { combineReducers } from 'redux';

// import all reducers
import auth from './auth';
import destinasi from './destinasi';
import paket from './paket';
import order from './order';
import users from './users';
import transaksi from './transaksi';

// combine them
const appReducer = combineReducers({
    auth,
    destinasi,
    paket,
    order,
    users,
    transaksi
})

export default appReducer;