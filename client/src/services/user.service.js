import axios from 'axios';
import authHeader from './auth.headers';

// const API_URL = 'https://wingrowagritech.herokuapp.com/';
// const API_URL = "https://wingrowmarket.onrender.com/";
//const API_URL = "http://localhost:4000/"
const API_URL = "http://localhost:4000/";
const { REACT_APP_API_URL } = process.env;
 const getPublicContent = () => {
    return axios.get(REACT_APP_API_URL + 'all');
  }
  const getSub = (userId) =>{
    return axios.post(REACT_APP_API_URL + 'sub1',{userId})
  }
  // const postSub = () =>{
  //   return axios.post(API_URL,'sub',{ headers: authHeader() });
  // }

  const postSub = (date , userId , stalls , validity ) => {
    return axios.post(REACT_APP_API_URL + "sub", {
        date,
        userId,
        stalls,
        validity, 
      } , { headers: authHeader() });
  }
  const getInOutdata = () => {
    return axios.get(REACT_APP_API_URL + 'inwardoutward' , { headers: authHeader() });
  }

  const getStallsData = () => {
    return axios.get(REACT_APP_API_URL + 'stalls', { headers: authHeader() });
  }

  const getAdminData = () => {
    return axios.get(REACT_APP_API_URL + 'admin', { headers: authHeader() });
  }

  const getFarmers = () => {
    return axios.get(REACT_APP_API_URL + 'farmer', { headers: authHeader() });
  }

  const getAllUsers = () => {
    return axios.get(REACT_APP_API_URL + 'allusers', { headers: authHeader() });
  }

  const getUsers = () => {
    return axios.get(REACT_APP_API_URL + 'users', { headers: authHeader() });
  }
  


const UserService = {
    getPublicContent,
    getStallsData,
    getAdminData,
    getInOutdata,
    getFarmers,
    getAllUsers,
    getUsers,
    getSub,
    postSub
  };
  
  export default UserService;


