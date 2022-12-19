import React from "react"
import {useDispatch} from 'react-redux'
import { setCurrentUser } from "../reducers/currentUserReducer"
import {useNavigate} from 'react-router-dom'
import loginService from "../services/loginService"
import chatsService from "../services/chatsService"

const Login = () =>{
    const [user,setUser]= React.useState({username:"",password:"",rePassword:""})
    const [isVisible,setIsVisible] = React.useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const showWhenVisibleStyle ={
        display: isVisible ? "" : "none"
    }

    const hideWhenVisibleStyle ={
        display: isVisible ? "none" : ""
    }

    function handleChange(event){
        if(event.target.name==="username"){
            setUser(prev=> {return {...prev,username:event.target.value}})
        }else if(event.target.name==="password"){
            setUser(prev=> {return {...prev,password:event.target.value}})
        }else if(event.target.name==="rePassword"){
            setUser(prev=> {return {...prev,rePassword:event.target.value}})
        }
    }

    const login = async (event)=>{
        event.preventDefault
        if((user.username&&user.password)!==""){
            try{
                const res = await loginService.post(user)
                dispatch(setCurrentUser(res))
                chatsService.setToken(res.token)
                navigate('/')
            }catch(err){
                console.log(err)
            }
        }
        
    }

    return(
        <div id="login">
            <div className="login-header">
                <div className="login-header-title">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39 39">
                        <path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path>
                        <path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path>
                    </svg>
                    <p><span>WHATSAPP CLONE</span> by OmarAlexDev</p>
                </div>
            </div>
            <div className="login-body">
                <div className="login-card" style={hideWhenVisibleStyle}>
                    <p>Para acceder a WhatsApp Clone:</p>
                    <div className="login-form">
                        <label>1. Ingresa tu <span className="login-keywords">nombre de usuario: </span></label>
                        <input name="username" value={user.username} onChange={()=>handleChange(event)}/>
                        <label>2. Ingresa tu <span className="login-keywords">contraseña: </span></label>
                        <input name="password" value={user.password} onChange={()=>handleChange(event)} type="password"/>
                        <label>3. Da click en <span className="login-keywords">INGRESAR: </span></label>
                        <button onClick={login}>INGRESAR</button>
                        <span className="login-link" onClick={()=>setIsVisible(true)}>¿No estas registrado aún?</span>
                    </div>
                </div>
                <div className="login-card" style={showWhenVisibleStyle}>
                    <p>Para registrarse a WhatsApp Clone:</p>
                    <div className="login-form">
                        <label>1. Ingresa tu nuevo <span className="login-keywords">nombre de usuario: </span></label>
                        <input name="username" value={user.username} onChange={()=>handleChange(event)}/>
                        <label>2. Ingresa tu nueva <span className="login-keywords">contraseña: </span></label>
                        <input name="password" value={user.password} onChange={()=>handleChange(event)} type="password"/>
                        <label>2. Ingresa nuevamente tu <span className="login-keywords">contraseña: </span></label>
                        <input name="rePassword" value={user.rePassword} onChange={()=>handleChange(event)} type="password"/>
                        <label>3. Da click en <span className="login-keywords">REGISTRARSE: </span></label>
                        <button>REGISTRARSE</button>
                        <span className="login-link" onClick={()=>setIsVisible(false)}>¿Ya tienes una cuenta?</span>
                    </div>
                </div>
                <div className="login-hero">

                </div>
            </div>
        </div>
    )
}

export default Login