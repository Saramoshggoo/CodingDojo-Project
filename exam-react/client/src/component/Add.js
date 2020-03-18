import React,{useState} from 'react'
import axios from 'axios';
import {navigate ,Link} from '@reach/router';
import './style.css';
function Add() {
    const [state,setState]=useState({
        name:"",
        dodate:""
    })
    const[errorState,setErrorState]=useState({
        
    }) 
    const changeHadeler=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:2020/api/v3/create',state)
        .then(response => {
            if(response.data.errors){
              
              setErrorState({
               name: response.data.errors.name ? response.data.errors.name.message : "",
                
             })
            } else {
              console.log("success")
               navigate("/")
            }
          })
          .catch(error => console.log(error))
        }







    return (
        <div  className="bodie"> 
            <h4><Link to="/">Back To Dashboard</Link></h4> 
        <div className="main">
            {state.name.length > 0 && state.name.length < 3 || state.errorName?
            <p>the name has to have 3 min char</p>:<p></p>}
            <p>{errorState.name}</p>
            <p>{errorState.dodate}</p>
           <form onSubmit={submitHandler}>
           <table>
           <tbody>
               <tr> 
                   <td>Name Project:</td>
                   <td><input type="text" name="name" onChange={changeHadeler} /></td>
               </tr>
               <tr> 
                   <td>due date:</td>
                   <td><input type="date" name="dodate" onChange={changeHadeler} /></td>
               </tr>
               <tr>
                   <td></td>
             <td><button >submit</button></td>
               </tr>
              
               </tbody>
           </table>
           </form> 
       
        </div>
        </div>
    )
}

export default Add
