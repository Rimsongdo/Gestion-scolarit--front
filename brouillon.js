/* 
import { useState } from "react";
import UserForm from "./creation";
import { Admin, AddStudent, AdminBoard,DeleteStudent} from "./admin";
import loginService from "../services/login";
import Cookies from 'js-cookie'

const Home = () => {
    const [view, setView] = useState('home');

    const logAdmin = async (newUser) => {
        try {
            const loggedUser = await loginService.login(newUser);
            window.localStorage.setItem('loggedAdmin',JSON.stringify(loggedUser))
            loginService.setToken(loggedUser.token);
            console.log("You are now connected", typeof(loggedUser.token));
            setView('admin');
        } catch (exception) {
            console.log(exception);
            return false;
        }
    };

    const clickStudent = (event) => {
        event.preventDefault();
        setView('addstudent');
    };
    const clickRemoveStudent = (event) => {
        event.preventDefault();
        setView('deletestudent');
    };

    const addStudent = async (newObject) => {
        try {
            const addedStudent = await loginService.create(newObject);
        } catch (exception) {
            console.log(exception);
            return;
        }
        setView("other");
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
    const adminLogout=async ()=>{
        await loginService.logout()
        console.log("You are out")
    }

    return (
        <div className="container">
            {view === 'home' && <Admin logAdmin={logAdmin} />}
            {view === 'admin' && <AdminBoard clickStudent={clickStudent} clickRemoveStudent={clickRemoveStudent} adminLogout={adminLogout}/>}
            {view === 'addstudent' && <AddStudent addStudent={addStudent} />}
            {view==='deletestudent'&&<DeleteStudent deleteStudent={deleteStudent}/>}
            
        </div>
    );
};

export default Home;

*/