import { useState } from "react"
import { useDispatch } from 'react-redux'
import { login } from "../../redux/apiCalls"


const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch , {username , password})
    }
  return (
    <div style={{
        display : "flex" ,
        flexDirection : "column" ,
        alignItems : "center" ,
        justifyContent : "center" ,
        height : "100vh" ,
      }}>
        <h1 style={{color : "teal" , marginBottom : 20}}>Login</h1>
      <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} style={{
        padding : 10 , marginBottom : 20 , width : "25%"
      }} />
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}  style={{
        padding : 10 , marginBottom : 20 , width : "25%"
      }}/>
      <button onClick={handleClick} 
      style={{
        padding : 10 , 
      width : "25%" , 
      backgroundColor : "teal" ,
    color : "white" , 
    cursor:"pointer"}}>Login</button>
    </div>
  )
}

export default Login
