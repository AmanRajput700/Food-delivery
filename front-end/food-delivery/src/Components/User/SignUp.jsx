import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { LoginContext } from '../../contexts/loginContext';
import axios from 'axios';

const SignUp = () => {

    const {
      register,
      handleSubmit,
      formState: { errors,isSubmitting },
    } = useForm();

    const {isOpen, setisOpen} = useContext(LoginContext)

    function onSubmit(data){
      axios.post('http://localhost:8080/register',data)
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        console.log('error:'+err.message);
      })
      setisOpen(false);
    }

  return (
    <div className='h-full w-full flex flex-col items-center justify-center relative'>
      <div className='flex w-[70%] justify-between items-center'>
        <h2 className='mb-2 text-xl w-full text-center'>Sign Up</h2>
        <button className='cursor-pointer' onClick={()=>{setisOpen(false)}}>x</button>

      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-[70%]'>
        <div className='w-full'>
          <label className="text-sm" htmlFor="username">Username</label>
          <br />
          <input {...register('username',
            { required: true,
            minLength:{value:3,message:'Minimum length of username is 3'},
             maxLength: 10 })}
             className="border rounded-sm w-full" id='username'/>
          {errors.username && <span className='text-red-500 text-sm'>{errors.username.message}</span>}
        </div>

        <div className='w-full'>
          <label className="text-sm" htmlFor="email">Email</label>
          <br />
          <input {...register('email',{ required: true, pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Improved regex
            message: 'Invalid email address',
          }})} className="border rounded-sm w-full" id='email'/>
          {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
        </div>
        <div className='w-full'>
          <label className="text-sm" htmlFor="password">Password</label>
          <br />
          <input {...register('password',{ required: true,
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, //regex
            message:
              'Password must contain at least one letter, one number, and one special character',
          }})} className="border rounded-sm w-full" type="password" id='password'/>
          {errors.password && <span className='text-red-500 text-sm w-[100%] text-center'>{errors.password.message}</span>}
        </div>

        <div className="w-full">
          <label className="text-sm" htmlFor="role">Role</label><br />
            <select
              {...register('role', { required: true })}
              className="border rounded-sm w-full"
              id="role"
              defaultValue="user"
            >
          <option value="user">User</option>
          <option value="admin">Restaurant Owner</option>
            </select>
          {errors.role && <span className="text-red-500 text-sm">Please select a role</span>}
        </div>

        <input className='border border-black-100 mt-1 rounded-sm px-2' disabled={isSubmitting}
          value={isSubmitting?"Submitting":"Submit"} 
          type='submit'/>
      </form>
    </div>
  )
}

export default SignUp
