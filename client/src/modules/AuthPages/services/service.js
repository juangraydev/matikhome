import * as React from 'react';
const axios = require('axios');



export function siginService(data){
    // axios.post('http://localhost:8080/api/auth/signin', data)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
      axios.get('http://localhost:5000/api/getList')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}

export function signupService(data){
    console.log(data);

}