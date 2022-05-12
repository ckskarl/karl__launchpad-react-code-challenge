import axios from "axios";

export const loadPostApi = async () =>
    await axios.get('https://jsonplaceholder.typicode.com/posts?%20_start=0&_limit=20');