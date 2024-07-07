import './App.css';
import UserForm from './components/creation';
import Navbar  from './components/navbar';
import { useState, useEffect } from 'react';
import profilService from './services/profils';
import Home from './components/adminPage';
import { AdminBoard } from './components/admin';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  
  useEffect(() => {
    profilService.getAll()
      .then(users => {
        setUsers(users);
        console.log('Users length is', users.length);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []); 

  const addUser = async (newUser) => {
    try {
      const createdUser = await profilService.create(newUser);
      setUsers(users.concat(createdUser));
      profilService.setId(createdUser.id)
      profilService.setToken(createdUser.token)
    } catch (exception) {
      console.log(exception);
    }
  };
  const updateUser=async (newUser)=>{
    try{
      const createdUser=await profilService.update(newUser)
    }
    catch(exception){
      console.log(newUser)
    }
  }

  return (
    <div className='page1'>
      <Navbar />
      <Home/>
      
     
    </div>
  );
};

export default App;
