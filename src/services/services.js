import { client } from "./axiosClient";

export function register(payLoad) {
  return client.post("/auth/register", payLoad);
}

export function verifyEmail(payLoad) {
  return client.post("/auth/verify-user", payLoad);
}

export function signin(payLoad) {
  return client.post("/auth/login", payLoad);
}

export function getProfile() {
  return client.get("/auth/profile");
}
export function addCourse(payLoad) {
  return client.post("/course/create", payLoad);
}

export function getCourse() {
  return client.get("/course/get-all-record");
}

export function docsUpload(payLoad) {
  return client.post("/auth/upload-doc", payLoad);
}
