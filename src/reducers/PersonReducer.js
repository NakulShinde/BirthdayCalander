
const daysInWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

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

export default function (state = false, action) {

    switch (action.type) {
        case 'UPDATE_PERSON_DATA':
          console.log(action.payload);
          return parsePersonData(action.payload.data, action.payload.year);
        default: 
        	return parsePersonData([
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
            ], '1978');
    }
}