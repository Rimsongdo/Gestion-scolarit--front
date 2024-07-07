import { useState } from "react";
const Login=({logUser})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [visible,setVisible]=useState(false)

    const hiddenWhenVisible={display:visible? 'none':''}
    const showWhenVisible={display:visible? '':'none'}
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
            await logUser(user)
            setVisible(true)
            
            
            
        }
        catch(exception){
            console.log(exception)
        }
    }
    return(
        <div>
            <div className="container">
                <div className="UserForm" style={hiddenWhenVisible}>
                    <h2>Log in to your account</h2>
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
            <div className="UserForm" style={showWhenVisible}>
                    <h1>Here the main page</h1>
            </div>
        </div>

    )
}

export default Login