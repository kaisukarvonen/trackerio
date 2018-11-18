import * as axios from "axios";
import { baseUrl } from "../../config";

export function fetch() {
  return axios.get(`${baseUrl}/categories/`).then(response => response);
}
