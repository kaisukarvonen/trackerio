import * as axios from 'axios';
import { baseUrl } from '../../config';

export function login(loginDetails) {
  return axios.post(`${baseUrl}/login/`, { ...loginDetails }).then(response => response.data);
}
