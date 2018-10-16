
export const updatePersonData = (data, year) => {
    return {
        type: 'UPDATE_PERSON_DATA',
        payload: {data: data, year: year}
    }
};

export const fetchPersonsList = () => {
  return {
      type: 'FETCHING_PERSONS_LIST',
      payload: {}
  }
};

export const setPersonsList = (data) => {
    return {
        type: 'SET_PERSONS_LIST',
        payload: {data: data}
    }
};
