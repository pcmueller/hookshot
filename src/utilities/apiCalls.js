const baseURL = 'https://botw-compendium.herokuapp.com/api/v2';

export const fetchDataByCategory = async (category) => {
    const response = await fetch(`${baseURL}/category/${category}`);
    const data = await response.json();
    return data;
}

export const fetchAllData = async () => {
    const response = await fetch(`${baseURL}`);
    const data = await response.json();
    return data;
}
