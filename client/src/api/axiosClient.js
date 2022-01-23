import axios from "axios";
const axiosClient = axios.create({
  baseURL: "http://localhost:5000",
  headers:{
      'content-type':'application/json'
  }
});

axiosClient.interceptors.request.use(
  (req) => {
   if(localStorage.getItem("profile")){
     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`
   }

   return req
  }, 
  (error) => {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  (res) => {
    if(res && res.data){
        return res.data
    }
    
    return res
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
