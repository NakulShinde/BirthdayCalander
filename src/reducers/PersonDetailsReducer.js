import {preparePersonToDisply} from './../services/dataParser'

export default function (state = null, action) {

    switch (action.type) {
        case 'FETCH_PERSON_DATA':
            return {
                isLoading: true,
                selectedPerson : {} 
            }
        case 'SET_PERSON_DATA':
            return {
                isLoading: false,
                selectedPerson : Object.assign({}, preparePersonToDisply(action.payload.person)) 
            }
        default:
            return state;
    }
}