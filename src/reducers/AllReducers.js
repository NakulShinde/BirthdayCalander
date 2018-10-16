import {combineReducers} from 'redux';
import PersonsListReducer from './PersonsListReducer';
import PersonDetailsReducer from './PersonDetailsReducer'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const AllReducers = combineReducers({
    personData: PersonsListReducer,
    personDetails: PersonDetailsReducer
});

export default AllReducers;