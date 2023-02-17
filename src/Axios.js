import axios from "axios";

const apiLink = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

export default apiLink;