import React, { useEffect, useState } from 'react'
import UserService from '../Services/UserService';
import UserRecord from './UserRecord';

function Details() {

  const [users,SetUser] = useState([]);
  async function  getUsers(){ 
       SetUser(await UserService.getAllProducts());
       console.log("From Details" ,users);
     }

     useEffect(()=>{
     getUsers();
     },[])



  return (
    <div className='table table-striped '>
     <table >
      <thead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Email</th>
          <th scope='col'>Password</th>
        </tr>
      </thead>
      <tbody>
         {  
          users.map((u)=>{console.log(u); return (<UserRecord id={u.id} email={u.email} password={u.password}/>)})
         }
      </tbody>
     </table>

      
    
    
    </div>
  )
}

export default Details