export const fetchPersonData = () => {
    return {
        type: 'FETCH_PERSON_DATA',
        payload: {}
    }
};

export const setPersonData = (data) => {
  return {
    type: 'SET_PERSON_DATA',
    payload: {person: data}
  }
};
