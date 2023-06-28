import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {Tab, initTE} from "tw-elements"
type UserUp = {
  lastName: string,
  firstName: string,
  birth: string,
  phone: string,
  email: string,
  password: string
}

const Signup = () => {
  const { register, handleSubmit, formState: {errors}} = useForm<UserUp>({
    defaultValues:{
      lastName: "",
      firstName: "",
      birth: "",
      phone: "",
      email: "",
      password: ""
    },
    mode: "onTouched"
  })
  const onSubmit : SubmitHandler<UserUp> = (data) =>{
    console.log(data);
    
  }
  useEffect(()=> {
    initTE({Tab});
  })
  return (
    <form className='h-screen sm:max-w-screen-sm max-w-md mx-auto  sm:mx-auto' onSubmit={handleSubmit(onSubmit)}>
      <div className='sm:grid sm:gap-4 sm:grid-cols-2'>
    <div className='flex justify-between sm:pb-0 pb-5'>
      <label htmlFor="">Last Name:</label>
      <input type="text" className='rounded-lg text-primary-color'
      {...register("lastName",
      {
        required:{
          value: true,
          message: "Last Name required"
        }
      })}
      />
    </div>
    <div className='flex justify-between sm:pb-0 pb-5'>
      <label htmlFor="">First Name:</label>
      <input type="text" className='rounded-lg text-primary-color'
      {...register("firstName",
      {
        required:{
          value: true,
          message: "First Name required"
        }
      })}/>
    </div>
    
    <div className='flex justify-between sm:pb-0 pb-5'>
      <label htmlFor="">Birth:</label>
      <input type="text" className='rounded-lg text-primary-color'
      {...register("birth",
      {
        required:{
          value: true,
          message: "Birth required"
        }
      })}/>
    </div>
    <div className='flex justify-between sm:pb-0 pb-5'>
      <label htmlFor="">Phone:</label>
      <input type="text" className='rounded-lg text-primary-color'
      {...register("phone",
      {
        required:{
          value: true,
          message: "Phone required"
        }
      })}/>
    </div>
    <div className='flex justify-between sm:pb-0 pb-5'>
      <label htmlFor="">Email:</label>
      <input type="text" className='rounded-lg text-primary-color'
      {...register("email",
      {
        required:{
          value: true,
          message: "Last Name required"
        },
        pattern:{
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Email not valid"
        }
      })}/>
    </div>
    <div className='flex justify-between sm:pb-0 pb-5'>
      <label htmlFor="">Password:</label>
      <input type="password" className='rounded-lg text-primary-color' 
      {...register("lastName",
      {
        required:{
          value: true,
          message: "Last Name required"
        }
      })}/>
    </div>
    
    {errors.password && (<span>{errors.password.message}</span>)|| errors.firstName && (<span>{errors.firstName.message}</span>) || errors.lastName && (<span>{errors.lastName.message}</span>)||errors.phone && (<span>{errors.phone.message}</span>)|| errors.birth && (<span>{errors.birth.message}</span>)|| errors.email && (<span>{errors.email.message}</span>) }
   
    </div>
    <div className='text-center py-5'>
    <button type='submit' className='border-button-color hover:bg-button-color transition-all'>Sign Up</button>
    </div>
  </form>
  
  )
}

export default Signup