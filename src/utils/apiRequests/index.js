import axios from 'axios';
import { makeURL } from '../common';


export const getAPI = async function(URL, successFn, errorFn, params = {}) {
   await axios({
      method: 'get',
      url: makeURL(URL),
      params: params,
    })
      .then(function(response) {
        let data = response.data;
        successFn(data);
      })
      .catch(function(error) {
        errorFn(error);
      });
  };
  