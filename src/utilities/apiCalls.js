const baseURL = 'https://botw-compendium.herokuapp.com/api/v2';

const fetchData = async () => {
  const response = await fetch(`${baseURL}`);
  const data = await response.json();
  return data;
}

export default fetchData;