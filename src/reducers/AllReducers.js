import {combineReducers} from 'redux';
import PersonReducer from './PersonReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const AllReducers = combineReducers({
    personData: PersonReducer
});

export default AllReducers;