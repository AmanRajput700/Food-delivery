import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { LoginContext } from '../../contexts/loginContext';
import axios from 'axios';
import { AuthContext } from '../../contexts/authContext';

const LoginForm = () => {
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  const {isOpen, setisOpen} = useContext(LoginContext);

  function onSubmit(data){
    
    axios.post('http://localhost:8080/login',data,{withCredentials: true})
    .then((res)=>{
      console.log(res.data);
      setIsLoggedIn(true);                
      setUser(res.data.user); 
       setisOpen(false);
    })
    .catch((err)=>{
      alert('Invalid');
      console.log('error'+ err.message);
    })
   

  }

  return (
    <div className='h-full w-full flex flex-col items-center justify-center relative'>
      <div className='flex justify-between w-[70%] items-center'>
        <h2 className='mb-2 text-xl text-center w-full'>Log In</h2>
        <button className='cursor-pointer' onClick={()=>{setisOpen(false)}}>x</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-[70%]'>
        <div className='w-full'>
          <label className="text-sm" htmlFor="username">Username</label>
          <br />
          <input {...register('username',{ required: true,
            minLength:{value:3,message:'Minimum length of username is 3'},
           maxLength: 10 })}
            className="border rounded-sm w-full" id='username'/>
            {errors.username && <p className='text-red-500 text-sm'>{errors.username.message}</p>}
        </div>
        <div className='w-full'>
          <label className="text-sm" htmlFor="password">Password</label>
          <br />
          <input {...register('password',{ required: true,minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, //regex
            message:
              'Password must contain at least one letter, one number, and one special character',
          }})} className="border rounded-sm w-full" type="password" id='password'/>
          {errors.password && <p className='text-red-500 text-sm w-[100%]'>{errors.password.message}</p>}
        </div>
        <br />
        <input className='border border-black-100 rounded-sm pl-2 pr-2' type='submit' 
        disabled={isSubmitting}
        value={isSubmitting?"Submitting":"Submit"}/>
      </form>
    </div>
  )
}

export default LoginForm
