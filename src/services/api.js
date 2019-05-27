const axios = require('axios');

const instance = axios.create({
  baseURL: "https://bench-api.applover.pl/api/v1/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use( undefined, (error) => {
 
  if (error.response.status === 401){
    return error.response.status
   }
   else{
     return error.response.status
   }
});


export async function authorizeUser(username, password) {
  console.log(username+ " "+password);
  const data = {
    "email": username,//"login@applover.pl",
    "password": password//"password123"
  }
    const token = await instance.post(`login/`, data);
    console.log(token);
    return token;  
}

export async function getOrganizationData() {
  
    const data = await instance.get(`organization/`, {
      'Content-Type': 'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjMsImV4cCI6MTU1NzQwNTUxNywiY3JlYXRlZF9hdCI6IjIwMTktMDQtMjUgMTI6Mzg6MzcgVVRDIn0.KzZpau5szzaBgy_rDOIg1vQxbtr4g1LY1jUn8svHddc'
    });
    console.log(data.body);
    return data.body;  
}