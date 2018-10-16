const daysInWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const fullDaysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];

function reoderDataAccordingToBirthDay(dayWisePersonData) {

    for (const key in dayWisePersonData) {

        let sortedData = dayWisePersonData[key].sort(function (firstPerson, secondPerson) {
            let fpDate = new Date(firstPerson.birthday);
            let spDate = new Date(secondPerson.birthday);
            return (spDate.getTime() - fpDate.getTime());
        });
        dayWisePersonData[key] = [...sortedData];
    }
    return dayWisePersonData;
}

const getCurrentDayOfUserBirthday = (person, year) => {

    let inputYear = year ? year : new Date().getFullYear();
    let userBirDate = new Date(person.birthday);
    let userBirDateInYear = new Date([userBirDate.getMonth()+1, userBirDate.getDate(), inputYear].join("/"));        
    return userBirDateInYear;
}

export const convertPersonDataWithDay = (personData, year) => {

    let personDataWithBirthdayDay = {};

    for(const index in personData){
        let person = personData[index];
        person.id = parseInt(index);
        
        let userBirDateInYear = getCurrentDayOfUserBirthday(person);
        if(isNaN(userBirDateInYear.getMonth())){
            continue;
        }
        let dayKey = daysInWeek[userBirDateInYear.getDay()];

        if (personDataWithBirthdayDay.hasOwnProperty(dayKey)) {
            var dayArray = personDataWithBirthdayDay[dayKey]
            dayArray.push(person);
        } else {
            personDataWithBirthdayDay[dayKey] = [person];
        }
    }
    return reoderDataAccordingToBirthDay(personDataWithBirthdayDay);
}

export const  parsePersonData = (personData, year) => {

    let dayOfWeekPersonData = {};
    for (const index in personData) {
        let person = personData[index];
        let date = new Date(person.birthday);
        let dayKey = daysInWeek[date.getDay()];
        //filter data by selected year first
        if (date.getFullYear() === parseInt(year)) {

            person['dayOfWeek'] = dayKey;
            if (dayOfWeekPersonData.hasOwnProperty(dayKey)) {
                var dayArray = dayOfWeekPersonData[dayKey]
                dayArray.push(person);
            } else {
                dayOfWeekPersonData[dayKey] = [person];
            }
        }
    }

    return reoderDataAccordingToBirthDay(dayOfWeekPersonData);
};


export const preparePersonToDisply = (person) => {
    if(!person || Object.keys(person).length < 1){
        return {};
    }
    let date = new Date(person.birthday);
    return Object.assign(person, {
        currentBirthday: fullDaysInWeek[getCurrentDayOfUserBirthday(person).getDay()],
        bornOnDate: [date.getDate(), monthsOfYear[date.getMonth()], date.getFullYear()].join(" "),
        age: new Date().getFullYear() - date.getFullYear()
    });
}
