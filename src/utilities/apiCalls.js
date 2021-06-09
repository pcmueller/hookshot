const baseURL = 'https://botw-compendium.herokuapp.com/api/v2';

const apiCalls = {

  fetchAllData = async () => {
    const response = await fetch(`${baseURL}`);
    const data = await response.json();
    return data;
  },

  fetchDataByCategory = async (category) => {
    const response = await fetch(`${baseURL}/category${category}`);
    const data = await response.json();
    return data;
  },
  
}
  
export default apiCalls;