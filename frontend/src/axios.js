import axios from "axios";

window.axios = axios
axios.defaults.withCredentials = false
// axios.defaults.baseURL = "http://localhost:8000/api"
let backendUrl = "http://" + window.location.hostname.toString() + ":"+process.env.PORT+"/api"
axios.defaults.baseURL = backendUrl
