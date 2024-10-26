import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<any>('https://jsonplaceholder.typicode.com/users')
  .then(data => {
    console.log(data);  
  })
  .catch(err => {
    console.error(err.message);  
  });