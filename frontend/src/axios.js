import axios from "axios";

window.axios = axios
axios.defaults.withCredentials = false
// axios.defaults.baseURL = "http://localhost:8000/api"
let backendUrl = "https://" + window.location.hostname.toString() + "/api"
console.log("Backend URL: ", backendUrl)
axios.defaults.baseURL = backendUrl
