import axios from 'axios'

// export const API = axios.create({
//   baseURL: 'http://auto-crm-back/api/'
// })



// export const API = axios.create({
//   baseURL: 'https://dev-back.newlifeauto.com.ua/api/'
// })

// axios
//   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//   .then(response => {
//     console.log(response.data);
//   });

export const API = axios.create({
  baseURL: 'http://sklad-usa-back/rest/v1/'
})

API.defaults.withCredentials = true;
API.defaults.headers.post['Content-Type'] ='application/json';
API.defaults.headers.post['Access-Control-Allow-Origin'] ='http://localhost:8080/';

API.interceptors.response.use(function (response) {

  return response;
}, function (error) {

  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  console.log(error.config);

  return Promise.reject(error);
});

