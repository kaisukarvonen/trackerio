import * as axios from 'axios';
import { baseUrl } from '../../config';

export function fetch(userId) {
  return axios.get(`${baseUrl}/activities/?user=${userId}`).then(response => response);
}
