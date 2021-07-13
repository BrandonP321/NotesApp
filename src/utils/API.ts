import axios from "axios";

const apiUrl = (endpoint: string) => `http://10.0.0.172:8000${endpoint}`

const getRequests = {

}

const postRequests = {
    createAccount: (userData: any) => {
        return axios.post(apiUrl("/api/user/account/create"), userData);
        // return axios.post("http://localhost:8000/api/user/account/create", userData);
    }
}

const putRequests = {

}

const deleteRequests = {

}

export default {
    ...getRequests,
    ...postRequests,
    ...putRequests,
    ...deleteRequests
}

// export const API = axios.create({
//     baseURL: "http://localhost:8000",
//     timeout: 1000
// })