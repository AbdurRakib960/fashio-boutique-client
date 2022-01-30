import axios from "axios";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTVjZDc5NWVhNGIyYWY2MmM5NGViZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjc5MDI2OCwiZXhwIjoxNjQzMDQ5NDY4fQ.M8AbBWBzSyArh1ypVBw5Qmy8Wvs3DAp42g2w9pv3_10";
const BASE_URL= "http://localhost:5000/api/"

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token:`Bearer ${TOKEN}`}
})