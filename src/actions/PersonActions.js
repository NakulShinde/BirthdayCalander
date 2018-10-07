export const updatePersonData = (data, year) => {
    return {
        type: 'UPDATE_PERSON_DATA',
        payload: {data: data, year: year}
    }
};

export const getPersonData = (personName, day) => {
    return {
        type: 'GET_PERSON_DATA',
        payload: {name: personName, dayOfWeek: day}
    }
};
