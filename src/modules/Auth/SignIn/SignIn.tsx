import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import {Tab, initTE} from "tw-elements"

type UserIn ={
  email:string,
  password:string,
  lastName: string,
  firstName: string,
  birth: string,
  phone: string,
}
const SignIn = () => {
  const [user, setUser] = useState<any[]>([])
  const [users, setUsers] = useState<any[]>([])
  const navigate = useNavigate();
  const {register, handleSubmit , formState: {errors}} = useForm<UserIn>({
    defaultValues:{
      email: "",
      password:"",
    },
    mode: "onTouched",
  })
  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:3000/users").then((res)=>{
        setUsers(res.data)
      }).catch((err) => {
        console.log(err);
        
      })
      
    })()
  }, [])
  const onSubmit: SubmitHandler<UserIn> = (data) =>  {
    const loginAccount = users.find(user => user.email === data.email);
    console.log(loginAccount);
    if(loginAccount?.password=== data.password) {
      alert("Login successful")
      setUser(loginAccount);
      localStorage.setItem("user",  JSON.stringify(loginAccount))
      navigate("/")
    }else{
      alert("Email or password incorrect")
    }
    
}
  
  useEffect(()=> {
    initTE({Tab});
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='h-screen w-72 mx-auto py-5'>
      <div>
      <div className='flex justify-between pt-5'>
      <label htmlFor="">Email:</label>
      <input {...register("email",{
        required:{
          value: true,
          message: " Email is required"
        },
        pattern:{
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Email not valid"
        }
      })} type="text" className='rounded-lg text-primary-color'/>
      </div>
      
      <div className='flex justify-between pt-5'>
        <label htmlFor="">Password:</label>
        <input {...register("password",{
          required:{
            value: true,
            message: "Please enter your password",
          }
        }
        )} type="password" className='rounded-lg text-primary-color' />
      </div>
      
      
      </div>
      {errors.password && (<span>{errors.password.message}</span>) || errors.email && (<span>{errors.email.message}</span>)}
      <div className='text-center pt-5'>
      <button type='submit' className='border-button-color hover:bg-button-color transition-all'>Sign In</button>
      </div>
    </form>
  )
}

export default SignIn