import React,{useRef,useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import {BrowserRouter as Router,Navigate} from 'react-router-dom';
const regForName = RegExp(/^[a-zA-Z]{2,100}$/);
const regForPassword = RegExp(/^[a-zA-Z0-9]{0,8}$/)
const regForEmail= RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);


export default function Registration() {
    const name = useRef("")
    const lastname = useRef("")
    const username = useRef("")
    const email = useRef("")
    const password = useRef("")
    const confirmpassword = useRef("")
    const [autho, setautho] = useState(false)
    const [errors, seterrors] = useState({
        nameerr:"",
        lastnameerr:"",
        usernameerr:"",
        emailerr:"",
        passworderr:"",
        confirmpassworderr:""
    })

    const validationHandler=(e)=>{
        const {id,value}= e.target
        switch(id){
            case 'name':
                regForName.test(value)?
                seterrors((prevState)=>({...prevState,nameerr:""}))
                :
                seterrors((prevState)=>({...prevState,nameerr:"Name Should have more than 1 characters"}))
                break;
            case 'lastname':
                regForName.test(value)?
                seterrors((prevState)=>({...prevState,lastnameerr:""}))
                :
                seterrors((prevState)=>({...prevState,lastnameerr:"Lastname Should have more than 1 characters"}))
                break;
            case 'username':
                regForName.test(value)?
                seterrors((prevState)=>({...prevState,usernameerr:""}))
                :
                seterrors((prevState)=>({...prevState,usernameerr:"Username Should have more than 1 characters"}))
                break;
            case 'email':
                regForEmail.test(value)?
                seterrors((prevState)=>({...prevState,emailerr:""}))
                :
                seterrors((prevState)=>({...prevState,emailerr:"Enter Valid Email"}))  
                break;
            case 'password':
                regForPassword.test(value)?
                seterrors((prevState)=>({...prevState,passworderr:""}))
                :
                seterrors((prevState)=>({...prevState,passworderr:"Password must have 8 characters and alphanumeric"}))
                break;
            case 'confirmpassword':
                password.current.value == confirmpassword.current.value ?
                seterrors((prevState)=>({...prevState,confirmpassworderr:""}))
                :
                seterrors((prevState)=>({...prevState,confirmpassworderr:"Password must be same"}))
                break;
            default:

        }
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        if(
            errors.nameerr==""&&
            errors.lastnameerr==""&&
            errors.usernameerr==""&&
            errors.emailerr==""&&
            errors.passworderr==""&&
            errors.confirmpassworderr==""
        ){

            axios.post("http://localhost:7000/users",{
                name : name.current.value,
                lastname : lastname.current.value,
                username : username.current.value,
                email : email.current.value,
                password : password.current.value
            })
            setautho(true)
        }
        else{
            console.log("as")
        }
    }

    return (
        <div>{console.log(errors.confirmpassworderr)}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <form>
                    <div>
                        <TextField
                        id="name"
                        label="First Name"
                        defaultValue=""
                        helperText={errors.nameerr}
                        inputRef={name}
                        onBlur={validationHandler}
                        />
                        <TextField
                        id="lastname"
                        label="Last Name"
                        defaultValue=""
                        helperText={errors.lastnameerr}
                        inputRef={lastname}
                        onBlur={validationHandler}
                        />
                    </div>
                    <div>
                        <TextField
                        id="username"
                        label="Username"
                        defaultValue=""
                        helperText={errors.usernameerr}
                        inputRef={username}
                        onBlur={validationHandler}
                        />
                        <TextField
                        id="email"
                        label="Email"
                        defaultValue=""
                        helperText={errors.emailerr}
                        inputRef={email}
                        onBlur={validationHandler}
                        />
                    </div>
                    <div>
                        <TextField
                        id="password"
                        label="Password"
                        defaultValue=""
                        helperText={errors.passworderr}
                        inputRef={password}
                        onBlur={validationHandler}
                        />
                        <TextField
                        id="confirmpassword"
                        label="Confirm Password"
                        defaultValue=""
                        helperText={errors.confirmpassworderr}
                        inputRef={confirmpassword}
                        onBlur={validationHandler}
                        />
                    </div>
                    <div>
                        <Button type="submit" onClick={submitHandler} variant="contained">Submit</Button>
                        
                        <Button type="reset" variant="outlined">Reset</Button>
                    </div>
                </form>
            </Box>
            {autho&&<Navigate to="/login"/>}
        </div>
    )
}
