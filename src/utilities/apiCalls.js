const baseURL = 'https://botw-compendium.herokuapp.com/api/v2';

export const fetchEntryImage = async (entry) => {
  return fetch(`${baseURL}/entry/${entry}/image`)
      .then(response => {
        handleErrors(response)
        return response.text()})
}

export const fetchDataByCategory = async (category) => {
  return fetch(`${baseURL}/category/${category}`)
      .then(response => {
        handleErrors(response)
        return response.json()})
}

const handleErrors = (response) => {
  if (!response.ok) {
    throw new Error()
  }
}