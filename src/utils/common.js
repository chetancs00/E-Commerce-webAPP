import { API_URL } from '../constants/api';

export const makeURL = function(URL) {
    return API_URL + '/' + URL;
  };

  export const amountNumberFormatting = function(number) {
    if (isNaN(number)) {
      return 0;
    }
    return new Intl.NumberFormat('en-IN').format(+number);
  };