
const daysInWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const fullDaysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];

function reoderDataAccordingToBirthDay(dayWisePersonData){

  for(const key in dayWisePersonData){
    
    dayWisePersonData[key].sort(function(firstPerson, secondPerson){
      let fpDate = new Date(firstPerson.birthday);  
      let spDate = new Date(secondPerson.birthday);  
      return fpDate.getTime() - spDate.getTime();
    });
  }
  return dayWisePersonData;
}

function parsePersonData(personData, year){

  let dayOfWeekPersonData = {};
  for(const index in personData){
      let person = personData[index];
      let date = new Date(person.birthday);
      let dayKey = daysInWeek[date.getDay()];
      //filter data by selected year first
      if(date.getFullYear() === parseInt(year)){

        person['dayOfWeek'] = dayKey;
        if(dayOfWeekPersonData.hasOwnProperty(dayKey)){
          var dayArray =dayOfWeekPersonData[dayKey]
          dayArray.push(person);
        }else {
          dayOfWeekPersonData[dayKey] = [person];
        }
      }
  }

  return reoderDataAccordingToBirthDay(dayOfWeekPersonData);
};

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

function preparePersonToDisply(person){
  let date = new Date(person.birthday);
  return Object.assign(person, {
      currentBirthday: fullDaysInWeek[daysInWeek.indexOf(person.dayOfWeek)],
      bornOnDate: [date.getDate(), monthsOfYear[date.getMonth()], date.getFullYear()].join(" "),
      age: new Date().getFullYear() - date.getFullYear()
    });
}

export default function (state = null, action) {

    switch (action.type) {
        case 'UPDATE_PERSON_DATA':
          console.log(action.payload);
          return parsePersonData(action.payload.data, action.payload.year);
        case 'GET_PERSON_DATA':
          console.log("GET_PERSON_DATA", action.payload);
          let slectedPerson = null;
          let dayOfWeekPeople = state[action.payload.dayOfWeek];
          for(const index in dayOfWeekPeople){
              var person = dayOfWeekPeople[index];
              if(person.name === action.payload.name){
                slectedPerson = person;
                Object.assign(slectedPerson, preparePersonToDisply(slectedPerson) );
                break;
              }
          }
          state = Object.assign({}, state, {slectedPerson: slectedPerson});
          return state;

        default: 
        	return parsePersonData(initailState, '1978');
    }
}