
const daysInWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function parsePersonData(personData){

  let dayOfWeekPersonData = {};
  for(const index in personData){
      let person = personData[index];
      let date = new Date(person.birthday);
      let dayKey = daysInWeek[date.getDay()];
      if(dayOfWeekPersonData.hasOwnProperty(dayKey)){
          var dayArray =dayOfWeekPersonData[dayKey]
          dayArray.push(person);
      }else {
          dayOfWeekPersonData[dayKey] = [person];
      }
  }
  return dayOfWeekPersonData;
};

export default function (state = false, action) {

    switch (action.type) {
        case 'UPDATE_PERSON_DATA':
          console.log(action.payload);
          return parsePersonData(action.payload.data);
        default: 
        	return parsePersonData([
                {
                  name: "Tyrion Lannister",
                  birthday: "12/02/1978"
                }, {
                  name: "Cersei Lannister",
                  birthday: "11/30/1975"
                }, {
                  name: "Daenerys Targaryen",
                  birthday: "11/24/1991"
                }, {
                  name: "Arya Stark",
                  birthday: "11/25/1996"
                }
            ]);
    }
}