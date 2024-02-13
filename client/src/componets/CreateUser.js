import React, { useState,} from 'react'
import{useNavigate}from "react-router-dom"
import axios from 'axios'


const CreateUser = () => {
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [age,setage]=useState()
    const navigate=useNavigate()
    const Submit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/CreateUser",{name,email,age})
        .then(result=>{
            navigate('/')
            console.log(result)
            
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='w-50 h-50  bg-white rounded p-3'>
            <form onSubmit={Submit}>
                <h2>ADD USER</h2>    
                <div className='mb-3'>
                    <label>name</label>
                    <input type='text' placeholder='enter your text'
                     className='form-control'
                      onChange={(e)=>setname(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label>email</label>
                    <input type='email'
                     placeholder='enter your email'
                       className='form-control'
                      onChange={(e)=>setemail(e.target.value)}></input>
                </div>
                <div className='mb-3'>
                    <label>age</label>
                    <input type='text'
                     placeholder='enter your age' 
                      className='form-control' 
                       onChange={(e)=>setage(e.target.value)}></input>
                </div>
                <button className='btn btn-success'>submit</button>
            </form>    
         </div>
    </div>
  )
}

export default CreateUser