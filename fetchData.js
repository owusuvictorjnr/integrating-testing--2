const axios = require('axios');
const baseUrl = 'https://jsonplaceholder.typicode.com';




exports.fetchData = async (endPoint) => {
 
  try {
    const result = await axios(`${baseUrl}/${endPoint}`);
    return result.data;
  } catch (e) {
    console.log(e.message);
  }
};




