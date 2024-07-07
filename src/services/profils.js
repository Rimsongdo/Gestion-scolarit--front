import axios from 'axios';

const baseURL = 'http://localhost:5000/api/users/';
const baseURL1='http://localhost:5000/api/adminlogin/student'
let token=null
let id=null
const setToken=newToken=>{
    token=`Bearer ${newToken}`
}
const setId=(newId)=>{
    id=newId
}

const getAll = () => {
    return axios.get(baseURL)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching users:', error);
            throw error; 
        });
};
const create = async (newObject) => {
    const config={
        headers:{Authorisation:token}
    }
    const response = await axios.post(baseURL1, newObject,config);
    return response.data;
  };

  const update = async (updatedObject) => {
    console.log(baseURL+id)
    const response = await axios.put(baseURL+id, updatedObject);
    return response.data;
};
export default {
    getAll,create,update,setId,setToken
};

