import { client } from "./axiosClient";

export function getSideBarContent() {
  return client.get("/sidebar/get-all-record");
}
