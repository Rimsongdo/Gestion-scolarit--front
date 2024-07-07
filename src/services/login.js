import axios from 'axios';

const baseURL = "http://localhost:5000/api/adminlogin";
const userURL="http://localhost:5000/api/users"
const managerURL="http://localhost:5000/api/adminlogin/manager"
const studentURL = "http://localhost:5000/api/adminlogin/student";
const updateManagerURL="http://localhost:5000/api/adminlogin/updateManager"
let token = null;

const setToken = newToken => {
    token = `Bearer ${newToken}`;
    console.log(token,"Your token")
};

const login = async (newObject) => {
    try {
        const response = await axios.post(baseURL, newObject);
        return response.data;
    } catch (exception) {
        console.error(exception);
        throw exception;
    }
};

const create = async (newObject) => {
    try {
        const config = {
            headers: { Authorization: token },
        };
        const response = await axios.post(studentURL, newObject, config);
        return response.data;
    } catch (exception) {
        console.error(exception);
        throw exception;
    }
};

const createManager = async (newObject) => {
    try {
        const config = {
            headers: { Authorization: token },
        };
        const response = await axios.post(managerURL, newObject, config);
        return response.data;
    } catch (exception) {
        console.error(exception);
        throw exception;
    }
};

const remove = async (id) => {
    try {
        const config = {
            headers: { Authorization: token },
        };
        const response = await axios.delete(`${studentURL}/${id}`, config);
        return response.data;
    } catch (exception) {
        console.error(exception);
        throw exception;
    }
};

const removeManager = async (id) => {
    try {
        const config = {
            headers: { Authorization: token },
        };
        const response = await axios.delete(`${managerURL}/${id}`, config);
        return response.data;
    } catch (exception) {
        console.error(exception);
        throw exception;
    }
};

const FetchM= async (username)=>{
    const config = {
        headers: { Authorization: token },
    };
    const response=await axios.get(`${baseURL}/${username}`,config)
    
    return response.data
}
const FetchS= async (username)=>{
    const config = {
        headers: { Authorization: token },
    };
    const response=await axios.get(`${baseURL}/student/${username}`,config)
    
    return response.data
}

const logout = () => {
    token = null;
    // Optionally, clear the token from local storage if stored there
    localStorage.removeItem('token');
};

const updateM = async (id,updatedObject) => {
    console.log(baseURL+id)
    const config = {
        headers: { Authorization: token },
    };
    const response = await axios.put(baseURL+'/'+id, updatedObject,config);
    return response.data;
};
const updateS = async (id,updatedObject) => {
    console.log(baseURL+id)
    const config = {
        headers: { Authorization: token },
    };
    const response = await axios.put(baseURL+'/student/'+id, updatedObject,config);
    return response.data;
};

export default { login, setToken, create, remove,FetchM,FetchS,logout,createManager,removeManager,updateM,updateS };