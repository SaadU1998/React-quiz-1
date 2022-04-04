import React, {useState} from "react";
import "./LogIn.css";
import Displaydata from "./Displaydata"

function LogIn() {

  const [password, setPassword]= useState("")
  const [email, setemail]= useState("")
  const [array, setArray]= useState([])
  const emailholder =(e)=>{
   
    setemail(e.target.value)

   
  }
  const passwordholder =(e)=>{
    
   
    setPassword(e.target.value)

   
  }
  
  const buttonHandler =(e)=>{
    e.preventDefault()
   
    
  
    const data = {password, email}
    setArray([...array, data])
    
  }





  return (
    <div>
     
     <div>
       <h1>
         Login Form
       </h1>
       <form onSubmit={buttonHandler}>
         <div>
       <label>Email</label>
       <input onChange={emailholder} type="email" name="" id="" />

         </div>
         <div>
       <label>password</label>
       <input onChange={passwordholder} type="password" />

         </div>

       <button type="submit" >Add information</button>
       </form>

     </div>
     <Displaydata data={array}/>
    </div>
  );
}

export default LogIn;
