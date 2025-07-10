import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Admin = () => {


    const {
        register,
        handleSubmit,
        formState: { errors,isSubmitting },
      } = useForm();

      function onSubmit(data){
        console.log(data);
      }

      function reset(event){
        event.preventDefault();
      }

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2017/01/26/02/06/christmas-wallpaper-2009590_640.jpg')` }}>
  <div className="absolute inset-0 flex items-center justify-center"> 
    <div className="bg-white p-8 rounded-lg  h-112 shadow-md w-full  md:w-1/2">
     
        
        <div className="flex justify-end">
        <Link to={'/'}><button className="cursor-pointer">x</button></Link>
      </div>
      <h2 className="text-xl font-bold text-center mb-4">Restaurant Details</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Restaurant Name</label>
          <input
            {...register('name', {
              required: true,
              minLength: { value: 3, message: 'Minimum length of Restaurant name is 3' },
              maxLength: 15,
            })}
            className="w-full border rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"  
            id="name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>
       
        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
          <input
            {...register('password', {
              required: true,
            })}
            className="w-full border rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="cuisine">Cuisine</label>
          <input
            {...register('cuisine', {
              required: true,
            })}
            className="w-full border rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="cuisine"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-gray-700" htmlFor="fssai">Fssai Lic.no</label>
          <input
            {...register('fssai',
            {required: true,
            minLength:{value:14},
            message:'Fssai License numbers length must be 14'},
            )}
            className="w-full border rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="cuisine"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.fssai.message}</p>}
        </div>
        
        <div className="text-center mt-4">
          <input
          onClick={reset}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            type="submit"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting" : "Submit"}
          />
        </div>
      </form>
        
    </div>
  </div>
</div>
  )
}

export default Admin