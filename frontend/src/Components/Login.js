import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const instance = axios.create({
    withCredentials: true
  })
  

export default function Login(){
    const [loggedState, setLoggedState] = useState(localStorage.getItem('loginState') === 'yes')
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function onSubmit(e){
        e.preventDefault()
        instance.post('/api/login',{
            email,
            password
        })
        .then((response) =>{
            if(response.data.status === 200){
                localStorage.setItem('loginState', 'yes')
                setLoggedState(true)
            }
            else if(response.data.status === 401){
                alert(response.data.message)
            }
            else if(response.data.status === 403){
                alert(response.data.message)
            }
            else{
                alert('Error Logging in')
            }
        })
    }
    
    return(
        <div className="bg-gray-800 h-screen flex justify-center">
            {loggedState? <Redirect to="/home" />:null}
            <div className="m-10 flex flex-col">
                <img alt="twitter logo" className="h-10" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzAzQTlGNDsiIGQ9Ik01MTIsOTcuMjQ4Yy0xOS4wNCw4LjM1Mi0zOS4zMjgsMTMuODg4LTYwLjQ4LDE2LjU3NmMyMS43Ni0xMi45OTIsMzguMzY4LTMzLjQwOCw0Ni4xNzYtNTguMDE2DQoJYy0yMC4yODgsMTIuMDk2LTQyLjY4OCwyMC42NC02Ni41NiwyNS40MDhDNDExLjg3Miw2MC43MDQsMzg0LjQxNiw0OCwzNTQuNDY0LDQ4Yy01OC4xMTIsMC0xMDQuODk2LDQ3LjE2OC0xMDQuODk2LDEwNC45OTINCgljMCw4LjMyLDAuNzA0LDE2LjMyLDIuNDMyLDIzLjkzNmMtODcuMjY0LTQuMjU2LTE2NC40OC00Ni4wOC0yMTYuMzUyLTEwOS43OTJjLTkuMDU2LDE1LjcxMi0xNC4zNjgsMzMuNjk2LTE0LjM2OCw1My4wNTYNCgljMCwzNi4zNTIsMTguNzIsNjguNTc2LDQ2LjYyNCw4Ny4yMzJjLTE2Ljg2NC0wLjMyLTMzLjQwOC01LjIxNi00Ny40MjQtMTIuOTI4YzAsMC4zMiwwLDAuNzM2LDAsMS4xNTINCgljMCw1MS4wMDgsMzYuMzg0LDkzLjM3Niw4NC4wOTYsMTAzLjEzNmMtOC41NDQsMi4zMzYtMTcuODU2LDMuNDU2LTI3LjUyLDMuNDU2Yy02LjcyLDAtMTMuNTA0LTAuMzg0LTE5Ljg3Mi0xLjc5Mg0KCWMxMy42LDQxLjU2OCw1Mi4xOTIsNzIuMTI4LDk4LjA4LDczLjEyYy0zNS43MTIsMjcuOTM2LTgxLjA1Niw0NC43NjgtMTMwLjE0NCw0NC43NjhjLTguNjA4LDAtMTYuODY0LTAuMzg0LTI1LjEyLTEuNDQNCglDNDYuNDk2LDQ0Ni44OCwxMDEuNiw0NjQsMTYxLjAyNCw0NjRjMTkzLjE1MiwwLDI5OC43NTItMTYwLDI5OC43NTItMjk4LjY4OGMwLTQuNjQtMC4xNi05LjEyLTAuMzg0LTEzLjU2OA0KCUM0ODAuMjI0LDEzNi45Niw0OTcuNzI4LDExOC40OTYsNTEyLDk3LjI0OHoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K" />
                <p className="m-5 text-2xl font-semibold text-center text-white">Log in to Twitter</p>
                <form className="flex flex-col">
                    <input onChange={e => setEmail(e.target.value)} className="w-96 mt-6 h-10 bg-gray-800 border border-white text-white rounded px-2" type="email" name="email" placeholder="Email"/>
                    <input onChange={e => setPassword(e.target.value)} className="w-96 mt-6 h-10 bg-gray-800 border border-white text-white rounded px-2" type="password" name="password" placeholder="Password"/>
                    <input onClick={onSubmit} className="w-96 mt-6 h-10 bg-gray-800 border border-white text-white rounded px-2 cursor-pointer" type="submit" value="Log in" />
                </form>
            </div>
        </div>
    )
}