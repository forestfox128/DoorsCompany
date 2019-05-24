const axios = require('axios');

const instance = axios.create({
  baseURL: "https://bench-api.applover.pl/api/v1/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});


export async function authorizeUser(username, password) {
  console.log("IN HIEr")
  const data = {
    "email": "login@applover.pl",
    "password": "password123"
  }
  try {
    const token = await instance.post(`login/`, data);
    console.log(token);
    return token;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}