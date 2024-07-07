import { useState } from "react";
import { Admin, AddStudent, AdminBoard,DeleteStudent,AddManager,DeleteManager, UpdateManager, UpdateStudent} from "./admin";
import loginService from "../services/login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
    const [view,setView]=useState(false)
    
    const logAdmin = async (newUser) => {
        try {
            const loggedUser = await loginService.login(newUser);
            window.localStorage.setItem('loggedAdmin',JSON.stringify(loggedUser))
            loginService.setToken(loggedUser.token);
            console.log("You are now connected", typeof(loggedUser.token));
            return true
            
        } catch (exception) {
            console.log(exception);
            return false;
        }
    };

   
    

    const addStudent = async (newObject) => {
        try {
            const addedStudent = await loginService.create(newObject);
            
          
        } catch (exception) {
            console.log(exception);
            return;
        }
        
    };
    const addManager = async (newObject) => {
        try {
            const addedStudent = await loginService.createManager(newObject);
            
          
        } catch (exception) {
            console.log(exception);
            return;
        }
        
    };
    const deleteStudent=async (username)=>{
        try{
            
            await loginService.remove(username)
            console.log("Deleted Successfully")
        }
        catch(e){
            console.log(e)
        }
    }
    const deleteManager=async (username)=>{
        try{
            
            await loginService.removeManager(username)
            console.log("Deleted Successfully")
        }
        catch(e){
            console.log(e)
        }
    }
    const updateManager= async (username)=>{
        try{
            const manager=await loginService.FetchM(username)
            return manager
        }
        catch(e){
            console.log(e)
        }
    }
    const updateStudent= async (username)=>{
        try{
            const manager=await loginService.FetchS(username)
            return manager
        }
        catch(e){
            console.log(e)
        }
    }
    

    return (

        <Router>
      <div>
        
      </div>
      <Routes>
        <Route path="/dashboard" element={<AdminBoard />} />
        <Route path="/" element={<Admin logAdmin={logAdmin}/>}/>
        <Route path="/dashboard/createStudent" element={<AddStudent addStudent={addStudent}/>}/>
        <Route path="/dashboard/createManager" element={<AddManager addManager={addManager}/>}/>
        <Route path="/dashboard/removeStudent" element={<DeleteStudent deleteStudent={deleteStudent}/>}/>
        <Route path="/dashboard/removeManager" element={<DeleteManager deleteManager={deleteManager}/>}/>
        <Route path="/dashboard/updateManager" element={<UpdateManager updateManager={updateManager}/>}/>
        <Route path="/dashboard/updateStudent" element={<UpdateStudent updateStudent={updateStudent}/>}/>
      </Routes>
    </Router>
    );
};

export default Home;
