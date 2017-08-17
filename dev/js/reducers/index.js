import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import activeUserReducer from './reducer-active-user';

const allReducers = combineReducers({ //we have taken all reducers and combined it to one allReducer
    users: UserReducer,
    activeUser : activeUserReducer
});
export default allReducers;