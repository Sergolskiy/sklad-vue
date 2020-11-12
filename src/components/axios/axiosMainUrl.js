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
  baseURL: 'https://api.coindesk.com/v1/bpi/'
})

API.interceptors.response.use(function (response) {

  console.log(4354);
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

