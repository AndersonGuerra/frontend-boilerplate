import axios, { AxiosInstance } from "axios";

class Api {
  http: AxiosInstance;
  post;
  get;
  put;
  patch;
  delete;
  constructor() {
    this.http = axios.create({
      baseURL: "http://localhost:3000",
    });
    this.get = this.http.get;
    this.post = this.http.post;
    this.put = this.http.put;
    this.patch = this.http.patch;
    this.delete = this.http.delete;
  }
  setToken(token: string) {
    this.http.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  }
  removeToken() {
    delete this.http.defaults.headers.common["Authorization"];
  }
  /* API */
  getUsers() {
    const users = this.http.get("/users");
    return users;
  }
}

export default new Api();
