export const updatePersonData = (data, year) => {
    return {
        type: 'UPDATE_PERSON_DATA',
        payload: {data: data, year: year}
    }
};