import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './style.css';
import {navigate ,Link} from '@reach/router';

function Dashboard() {
    const [state,setState]=useState([])
    const [refresher, setRefresher] = useState(false);
    useEffect(()=>{
        axios.get("http://localhost:2020/api/v3/readAll")
        .then (response=>setState([...response.data]))
        .catch(error=>console.log(error))
       },[refresher])

       const clickHandler=(e,item,name)=>{
        e.preventDefault();
        const temp = {...item}
        console.log(temp)
        temp.status=name
        axios.put(`http://localhost:2020/api/v3/updateOne/${item._id}`,temp)
        .then(response => setRefresher(!refresher))
        .catch(error => console.log(error))
    } 
    const deleteHandler=(e,item)=>{
        e.preventDefault();
        
    axios.delete(`http://localhost:2020/api/v3/deleteOne/${item._id}`)
     
      .then(response => setRefresher(!refresher))
      .catch(error=>console.log(error))


    }




    return (
<div className="dashboard">
    <div className="design">
    <h2>Not Started</h2>
      {state.map((item,index)=>(
       <div key={index}>
            {item.status ==="notstart"?
           <div> 
               <p> Project Name: {item.name} </p>
               <p style={{color: new Date(item.dodate).getTime() - new Date().getTime() < 0 ? 'red' : 'black'}}>
                  Due: {item.dodate}</p>
               <p><button onClick={(e) =>clickHandler(e,item,"start")}>start project</button> </p>    
          </div>:"" }
 
       </div>

         ))}
   </div>
    <div className="design"> 
       <h2>In process</h2>
        {state.map((item,index)=>(
        <div key={index}>
                {item.status ==="start"?
            <div> 
                <p> Project Name: {item.name} </p>
                <p style={{color: new Date(item.dodate).getTime() - new Date().getTime() < 0 ? 'red' : 'black'}}>
                    Due: {item.dodate}</p>
                <p><button onClick={(e) =>clickHandler(e,item,"completed")}>Make To Completed</button> </p>    
            </div>:"" }
    
        </div>

            ))}
    
    
    
    
    
    </div>
      <div className="design">
      <h2> completed</h2>
      {state.map((item3,index)=>(
        <div key={index}>
                {item3.status ==="completed"?
            <div> 
                <p>Project Name: {item3.name} </p>
                <p style={{color: new Date(item3.dodate).getTime() - new Date().getTime() < 0 ? 'red' : 'black'}}>
                    Due: {item3.dodate}</p>
                <p></p>
                <p><button onClick={(e) =>deleteHandler(e,item3)}>Remove the Task</button> </p>    
            </div>:"" }
    
        </div>

            ))}

       </div>


  
     
   <button ><Link to="/add">Back To Dashboard</Link></button>
   </div>

)
}

export default Dashboard
