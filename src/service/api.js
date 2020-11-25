import axios from 'axios';
import * as Config from './httpservice';
import HandleError from './helper';

export default function callApi(endpoint, method = 'POST', body, token) {
  return (
    axios({
      method: method,
      url: `${Config.BaseURL}/${endpoint}`,
      headers: {
        // "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: body,
    })
      // .then((res) => console.log(res))
      .catch(HandleError)
  );
}
