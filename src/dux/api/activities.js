import * as axios from "axios";
import { baseUrl } from "../../config";

export function fetch(username) {
  const promise = axios
    .get(`${baseUrl}/completed_activities/?user=${username}`)
    .then(response => response)
    .catch(error => error);
  return promise;
}
