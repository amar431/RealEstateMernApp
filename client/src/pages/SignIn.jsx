import {Link,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {  toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function SignIn() {
  const[formdata,setFormData] = useState({})
  const[error,setError] = useState(null)
  const[loading,setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleChange = (e) =>{

    setFormData({
      ...formdata,
      [e.target.id]:e.target.value
    })
  }
  const handleSubmit = async(e)=>{
      e.preventDefault()
      try {
        setLoading(true)
      const res = await fetch('/api/auth/signin',
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formdata),
      })

      const data = await res.json()
      
      if(data.success === false){
        setError(data.message)
        setLoading(false)
        return
      }
      setLoading(false)
      setError(null)
      navigate('/')
      toast.success('Sign In successful!', {
        position: 'top-right',
        autoClose: 5000,
      });

      } catch (error) {
        setLoading(false)
        
        toast.error("not success", {
          position: 'top-right',
          autoClose: 5000,
        });
        setError(error.message)
      }
      
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7 text-cyan-600">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none focus:ring focus:border-cyan-300"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none focus:ring focus:border-cyan-300"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} 
         className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-lg uppercase text-white">
         {loading?"loading":'Sign In'}
        </button>
      </form>
      <div className="mt-6">
        <p className="text-center text-gray-600">Dont have an account?</p>
        <Link to="/sign-up" className="text-blue-400 hover:underline text-center block">
          Sign up
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignIn