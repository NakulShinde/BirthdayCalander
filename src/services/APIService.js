
export const getPersonListData = () => {
    return fetch('/staticData/birthdayData.json')
        .then(response => response.json())
}