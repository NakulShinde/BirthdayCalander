
import {parsePersonData} from "../services/dataParser";

let initailState = [
  {
    name: "Tyrion Lannister",
    birthday: "12/02/1978"
  }, {
    name: "Cersei Lannister",
    birthday: "11/30/1978"
  }, {
    name: "Daenerys Targaryen",
    birthday: "11/24/1978"
  }, {
    name: "Arya Stark",
    birthday: "11/25/1978"
  }
];


export default function (state = null, action) {

    switch (action.type) {
      
      case 'FETCHING_PERSONS_LIST':
      
        return {
          isLoading: true,
          data : []
        }
      
      case 'SET_PERSONS_LIST':
      
        return {
          isLoading: false,
          data : [...action.payload.data.data]
        }
      
      case 'UPDATE_PERSON_DATA':

          return parsePersonData(action.payload.data, action.payload.year);
        
      default:
        	return {
            isLoading: false,
            data : [...initailState]
          }
    }
}