import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import {Tab, initTE} from "tw-elements"

type UserIn ={
  email:string,
  password:string
}
const SignIn = () => {
  const {register, handleSubmit , formState: {errors}} = useForm<UserIn>({
    defaultValues:{
      email: "",
      password:"",
    },
    mode: "onTouched",
  })
  const onSubmit: SubmitHandler<UserIn> = (data) => console.log(data);
  
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