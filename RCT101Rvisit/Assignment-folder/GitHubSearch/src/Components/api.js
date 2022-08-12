import axios from "axios";

export const getUser = (text,page) =>{
    return axios.get(`https://api.github.com/search/users?q=${text}&page=${page}&per_page=5`)
}