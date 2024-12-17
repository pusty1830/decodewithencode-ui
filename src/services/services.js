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

export function getCourse(payLoad) {
  return client.post("/course/get-all-record", payLoad);
}

export function docsUpload(payLoad) {
  return client.post("/auth/upload-doc", payLoad);
}

export function uploadVideo(payLoad) {
  return client.post("/video/create", payLoad);
}

export function updateProfile(payLoad) {
  return client.patch("/auth/update-profile", payLoad);
}

export function getAllDataUsingSearch(payLoad) {
  return client.post("/course/search-record", payLoad);
}
