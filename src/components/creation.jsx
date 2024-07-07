import { useState } from "react";

const UserForm = ({ addUser,updateUser }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profession,setProfession]=useState('')
  const [location,setLocation]=useState('')
  const [phone,setPhone]=useState('')
  const [birthday,setBithday]=useState('')
  const [visible,setVisible]=useState(false)
  
  
  const hiddenWhenVisible={display:visible? 'none':''}
  const showWhenVisible={display:visible? '':'none'}
  const handleName = (event) => setName(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleUsername = (event) => setUsername(event.target.value);
  const handleBirthday=(event)=>setBithday(event.target.value)
  const handlePhone=(event)=>setPhone(event.target.value)
  const handleProfession=(event)=>setProfession(event.target.value)
  const handleLocation=(event)=>setLocation(event.target.value)

  const handleUpdate=async (event)=>{
    event.preventDefault()
    try{
        const user={profession,location,phone}
        await updateUser(user)
        setLocation('')
        setPhone('')
        setProfession('')
    }
    catch(exception)
    {
        console.log(exception)
    }
  }
  const handleCreate = async (event) => {
    event.preventDefault();
    try {
      const newUser = {
        name, username, password
      };
      await addUser(newUser);
      setVisible(true)
      setName('');
      setUsername('');
      setPassword('');
     
    } catch (exception) {
      console.log(exception);
    }
  };
  const handleLogin=()=>{

  }

  return (
    <div className="container">
      
      <div style={hiddenWhenVisible} className="UserForm">
        <h2>Veuillez Créer un Compte</h2>
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
          
          <button type="submit" className="btn btn-primary">Create an Account</button>
          
          
        </form>
        <div>
            <button className="btn btn-secondary" onClick={handleLogin}>Login</button>
          </div>
      </div>
      <div className="UserForm" style={showWhenVisible}>
                <h2>Ajouter des Infos Supplémentaires</h2>
            <form onSubmit={handleUpdate}>
                <div className="form-group">
                    <label htmlFor="profession">Profession Or Studies</label>
                    <input type="text" value={profession} id="profession" className="form-control" onChange={handleProfession}/>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input type="text" value={location} id="location" className="form-control" onChange={handleLocation}/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" value={phone} id="phone" className="form-control" onChange={handlePhone}/>
                </div>
                <div className="form-group">
                    <label htmlFor="birthday">Birthday</label>
                    <input type="date" value={birthday} id="birthday" className="form-control" onChange={handleBirthday}/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add Infos</button>
                </div>
            </form>
            </div>
            
    </div>
  );
};

const Student=({handleCreate})=>{
        const [name, setName] = useState('');
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [profession,setProfession]=useState('')
        const [location,setLocation]=useState('')
        const [phone,setPhone]=useState('')
        const [birthday,setBithday]=useState('')
        const [visible,setVisible]=useState(false)
  
  
        const hiddenWhenVisible={display:visible? 'none':''}
        const showWhenVisible={display:visible? '':'none'}
        const handleName = (event) => setName(event.target.value);
        const handlePassword = (event) => setPassword(event.target.value);
        const handleUsername = (event) => setUsername(event.target.value);
        const handleBirthday=(event)=>setBithday(event.target.value)
        const handlePhone=(event)=>setPhone(event.target.value)
        const handleProfession=(event)=>setProfession(event.target.value)
        const handleLocation=(event)=>setLocation(event.target.value)

        return(
            <div>
                <div className="UserForm">
                <h2>Veuillez Créer un Compte</h2>
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
                
                <button type="submit" className="btn btn-primary">Create an Account</button>
                
                
                </form>
            </div>
        </div>
        )
    }

export default UserForm;
