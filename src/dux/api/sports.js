import * as axios from 'axios';
import { baseUrl } from '../../config';

export function fetch() {
  return axios.get(`${baseUrl}/sports/`).then(response => response);
}
