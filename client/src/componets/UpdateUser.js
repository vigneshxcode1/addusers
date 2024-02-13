
import React, { useEffect ,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const UpdateUser = () => {
    const {id}= useParams()
    const [name,setname]=useState()
    const [email,setemail]=useState()
    const [age,setage]=useState()
    const navigate=useNavigate()



    useEffect(()=>{
        axios.get("http://localhost:3001/getUser/"+id)
        .then(result=>{
            console.log(result.data)
            setname(result.data.name)
            setemail(result.data.email)
            setage(result.data.age)

        })
        .catch(err=>console.log(err))
    },[])

 
    const Update=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3001/updateUser/"+id,
        {name,email,age})
        .then(result=>{
            navigate('/')
           
            
        })
        .catch(err=>console.log(err))
    }


  return (

    <div className='d-flex vh-100 bg-primary justify-content-center align-item-center'>
        <div className='w-50 h-50  bg-white rounded p-3'>
            <form onSubmit={Update} >
                <h2>Update USER</h2>    
                <div className='mb-2'>
                    <label>name</label>
                    <input type='text' 
                    placeholder='enter your text'
                     className='form-control'
                     value={name}
                     onChange={(e)=>setname(e.target.value)}
                     ></input>
                </div>
                <div className='mb-2'>
                    <label>email</label>
                    <input type='email'
                     placeholder='enter your email'  
                     className='form-control'
                     value={email}
                     onChange={(e)=>setemail(e.target.value)}
                     ></input>
                </div>
                <div className='mb-2'>
                    <label>age</label>
                    <input type='text'
                     placeholder='enter your age' 
                      className='form-control'
                      value={age}
                      onChange={(e)=>setage(e.target.value)}
                      ></input>
                </div>
                <button className='btn btn-success'>update</button>
            </form>    
         </div>
    </div>
  )
}

export default UpdateUser