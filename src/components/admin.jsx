import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginService from "../services/login";

const Admin=({logAdmin})=>{
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false);
   
    
    const handlePassword = (event) => setPassword(event.target.value);
    const handleUsername = (event) => setUsername(event.target.value);
    

    const handleLogin=async (event)=>{
        
        event.preventDefault()
        try{
            const user={username,password}
            if(!username||!password){
                console.log("Username and password can't be empty")
                return
            }
            const success=await logAdmin(user)
            console.log(success)
            if(success){
                window.localStorage.setItem('loggedAdmin',user);
           
                setIsAuth(true)
               
                navigate('/dashboard');
            }
            
          
           
            
           
        }
        catch(exception){
            console.log(exception)
        }
    }
    const handleStudentCreation=async (event)=>{
        event.preventDefault()
       

    }
    
    return(
        <div>
            <div className="container">
                <div className="UserForm" >
                    <h2>Log in as an Admin</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" value={username} id="username" onChange={handleUsername} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" value={password} id="password" onChange={handlePassword} />
                        </div>       
                        <button type="submit" className="btn btn-primary">Login</button>         
                    </form>
                </div>
            </div>
            
        </div>

    )
}
const AdminBoard = () => {
    const navigate = useNavigate()
    const clickStudent = (event) => {
        event.preventDefault();
       navigate("/dashboard/createStudent")
        
    };
    const clickRemoveStudent = (event) => {
        event.preventDefault();
        navigate('/dashboard/removeStudent')
        
    };
    const clickRemoveManager = (event) => {
        event.preventDefault();
        navigate('/dashboard/removeManager')
        
    };
   
    const adminLogout=async (event)=>{
        event.preventDefault()
        await loginService.logout()
        console.log("You are out")
        navigate("/")
    }
    const clickManager=(event)=>{
        event.preventDefault()
        navigate('/dashboard/createManager')
    }
    const clickUpdateManager=(event)=>{
        event.preventDefault()
        navigate('/dashboard/updateManager')
    }
    const clickUpdateStudent=(event)=>{
        event.preventDefault()
        navigate('/dashboard/updateStudent')
    }
   
    return (
        <div className="adminBoard">
            <h1 className="bienvenu">Welcome to the Admins Board</h1>
            <button className="btn" onClick={clickManager}>Add a manager</button>
            <button className="btn" onClick={clickStudent}>Add a student</button>
            <button className="btn" onClick={clickRemoveManager}>Remove a manager</button>
            <button className="btn" onClick={clickRemoveStudent}>Remove a student</button>
            <button className="btn" onClick={clickUpdateManager}>Modify a manager</button>
            <button className="btn" onClick={clickUpdateStudent}>Modify a student</button>
            <button className="btn" onClick={adminLogout}>Logout</button>
        </div>
    );
}


const AddStudent=({addStudent})=>{
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [filiere,setFiliere]=useState('')
    const [carteID,setCarteID]=useState('')
    
    const handleName = (event) => setName(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const handleUsername = (event) => setUsername(event.target.value);
    const handleFiliere=(event)=>setFiliere(event.target.value)
    const handleCarteID=(event)=>setCarteID(event.target.value)
   

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
          const newUser = {
            name, username, password,filiere,carteID
          };
          await addStudent(newUser);
          setName('');
          setUsername('');
          setPassword('');
          setCarteID('')
          setFiliere('')
         
        } catch (exception) {
          console.log(exception);
        }
      };
    return(
        <div>
            <div className="UserForm">
            <h2>Add a student</h2>
            <form onSubmit={handleCreate}>
            <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input type="text" className="form-control" value={name} id="name" onChange={handleName} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" value={username} id="username" onChange={handleUsername} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" value={password} id="password" onChange={handlePassword} />
            </div>
            <div className="form-group">
                <label htmlFor="filiere">Filiere</label>
                <input type="text" className="form-control" value={filiere} id="filiere" onChange={handleFiliere} />
            </div>
            <div className="form-group">
                <label htmlFor="carteid">CarteID</label>
                <input type="text" className="form-control" value={carteID} id="carteid" onChange={handleCarteID} />
            </div>
    
            <button type="submit" className="btn btn-primary">Add a student</button>
            
            
            </form>
        </div>
    </div>
    )
}

const DeleteStudent=({deleteStudent})=>{
    const [username,setUsername]=useState('')
   
    const handleUsername=(event)=>{
        setUsername(event.target.value)
    }
   
    const handleDelete=async event=>{
        event.preventDefault()
        
            
            deleteStudent(username)
       

    }
    return(
        <div>
            <div className="UserForm">
                <h2>Delete a student</h2>
                <form onSubmit={handleDelete}>
                    <div className="form-group">
                        <label htmlFor="username">Student Username</label>
                        <input type="text" className="form-control" value={username} id="username" onChange={handleUsername} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Delete</button>
                    
                    
                </form>
            </div>
        </div>
    )

}

const AddManager=({addManager})=>{
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [filiere,setFiliere]=useState('')
    
    
    const handleName = (event) => setName(event.target.value);
    const handlePassword = (event) => setPassword(event.target.value);
    const handleUsername = (event) => setUsername(event.target.value);
    const handleFiliere=(event)=>setFiliere(event.target.value)
    
    const handleCreate = async (event) => {
        event.preventDefault();
        try {
          const newUser = {
            name, username, password,filiere
          };
          await addManager(newUser);
          setName('');
          setUsername('');
          setPassword('');
          setFiliere('')
         
        } catch (exception) {
          console.log(exception);
        }
      };
    return(
        <div>
            <div className="UserForm">
            <h2>Add a manager</h2>
            <form onSubmit={handleCreate}>
            <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input type="text" className="form-control" value={name} id="name" onChange={handleName} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" value={username} id="username" onChange={handleUsername} />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" value={password} id="password" onChange={handlePassword} />
            </div>
            <div className="form-group">
                <label htmlFor="filiere">Filiere</label>
                <input type="text" className="form-control" value={filiere} id="filiere" onChange={handleFiliere} />
            </div>
          
    
            <button type="submit" className="btn btn-primary">Add a manager</button>
            
            
            </form>
        </div>
    </div>
    )

}

const DeleteManager=({deleteManager})=>{
    const [username,setUsername]=useState('')
   
    const handleUsername=(event)=>{
        setUsername(event.target.value)
    }
   
    const handleDelete=async event=>{
        event.preventDefault()
        
            
            deleteManager(username)
       

    }
    return(
        <div>
            <div className="UserForm">
                <h2>Delete a manager</h2>
                <form onSubmit={handleDelete}>
                    <div className="form-group">
                        <label htmlFor="username">Student Username</label>
                        <input type="text" className="form-control" value={username} id="username" onChange={handleUsername} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Delete</button>
                    
                    
                </form>
            </div>
        </div>
    )

}


const UpdateManager=({updateManager})=>{
    const [username1,setUsername1]=useState('')
    const [managers, setManager] = useState([]);
    const [view,setView]=useState('first')
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
  
    const [filiere,setFiliere]=useState('')
    
    
    const handleName = (event) => setName(event.target.value);
  
    const handleUsername = (event) => setUsername(event.target.value);
    const handleFiliere=(event)=>setFiliere(event.target.value)
    
    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
          const newUser = {
            name, username,filiere
          };
          await updateM(newUser);
          setName('');
          setUsername('');
         
          setFiliere('')
         
        } catch (exception) {
          console.log(exception);
        }
      };
    const updateM=async (newObject)=>{
        try{
            await loginService.updateM(username1,newObject)
        }
        catch(e){
            console.log(e)
        }
    }
    const handleUsername1=(event)=>{
        setUsername1(event.target.value)
    }
    const handleUpdateManager=async event=>{
        event.preventDefault()
        const manager=await updateManager(username1)
        
        setManager(manager)
        console.log(manager)
        setFiliere(manager.filiere)
        setName(manager.name)
        setUsername(manager.username)
        setView('second')

       
       
    }
    return(
        <div>
            {view==='first'&&<div className="UserForm">
                <h2>Update infos</h2>
                <form onSubmit={handleUpdateManager}>
                    <div className="form-group">
                        <label htmlFor="username1">Manager Username</label>
                        <input type="text" className="form-control" value={username1} id="username1" onChange={handleUsername1} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
            }
            {view==='second'&&
            <div>
                <div className="UserForm">
            <h2>Modify infos</h2>
            <form onSubmit={handleUpdate}>
            <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input type="text" className="form-control" value={name} id="name" onChange={handleName} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" value={username} id="username" onChange={handleUsername} />
            </div>
            <div className="form-group">
                <label htmlFor="filiere">Filiere</label>
                <input type="text" className="form-control" value={filiere} id="filiere" onChange={handleFiliere} />
            </div>
          
    
            <button type="submit" className="btn btn-primary">Add the Updates</button>
            
            
            </form>
        </div>
            </div>

            }
            
        </div>
    )
}


const UpdateStudent=({updateStudent})=>{
    const [username1,setUsername1]=useState('')
    const [students, setStudent] = useState([]);
    const [view,setView]=useState('first')
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [carteID,setCarteID]=useState("")
    const [filiere,setFiliere]=useState('')
    
    
    const handleName = (event) => setName(event.target.value);
    const handleCarteID = (event) => setCarteID(event.target.value);
    const handleUsername = (event) => setUsername(event.target.value);
    const handleFiliere=(event)=>setFiliere(event.target.value)
    
    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
          const newUser = {
            name, username,filiere,carteID
          };
          await updateS(newUser);
          setName('');
          setUsername('');
          setCarteID("")
          setFiliere('')
         
        } catch (exception) {
          console.log(exception);
        }
      };
    const updateS=async (newObject)=>{
        try{
            await loginService.updateS(username1,newObject)
        }
        catch(e){
            console.log(e)
        }
    }
    const handleUsername1=(event)=>{
        setUsername1(event.target.value)
    }
    const handleUpdateStudent=async event=>{
        event.preventDefault()
        const student=await updateStudent(username1)
        
        setStudent(student)
        setFiliere(student.filiere)
        setName(student.name)
        setUsername(student.username)
        setCarteID(student.carteID)
        setView('second')

       
       
    }
    return(
        <div>
            {view==='first'&&<div className="UserForm">
                <h2>Update infos</h2>
                <form onSubmit={handleUpdateStudent}>
                    <div className="form-group">
                        <label htmlFor="username1">Student Username</label>
                        <input type="text" className="form-control" value={username1} id="username1" onChange={handleUsername1} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
            }
            {view==='second'&&
            <div>
                <div className="UserForm">
            <h2>Modify infos</h2>
            <form onSubmit={handleUpdate}>
            <div className="form-group">
                <label htmlFor="name">Full name</label>
                <input type="text" className="form-control" value={name} id="name" onChange={handleName} />
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" value={username} id="username" onChange={handleUsername} />
            </div>
            <div className="form-group">
                <label htmlFor="filiere">Filiere</label>
                <input type="text" className="form-control" value={filiere} id="filiere" onChange={handleFiliere} />
            </div>
            <div className="form-group">
                <label htmlFor="carteid">CarteID</label>
                <input type="text" className="form-control" value={carteID} id="carteid" onChange={handleCarteID} />
            </div>
          
    
            <button type="submit" className="btn btn-primary">Add the Updates</button>
            
            
            </form>
        </div>
            </div>

            }
            
        </div>
    )
}
 



export {Admin, AdminBoard,AddStudent,DeleteStudent,AddManager,DeleteManager,UpdateManager,UpdateStudent}