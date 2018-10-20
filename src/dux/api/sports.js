import * as axios from "axios";
import { baseUrl } from "../../config";

export function fetch() {
  const promise = axios
    .get(`${baseUrl}/sports/`)
    .then(response => response)
    .catch(error => error);
  return promise;
}