const axios = require('axios');

const instance = axios.create({
  baseURL: "https://bench-api.applover.pl/api/v1/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use( undefined, (error) => {
 
  console.log(error.response.status+"ERROR");
  if (error.response.status === 401){
    return error.response.status
   }
   else{
     return error.response.status
   }
});


export async function authorizeUser(username, password) {
  console.log("IN HIEr")
  const data = {
    "email": "login@applover.pl",
    "password": "password123"
  }
    const token = await instance.post(`login/`, data);
    console.log(token);
    return token;
  
}