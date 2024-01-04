import React from 'react'
import Edit from './Edit'
import { Link } from 'react-router-dom'

function UserRecord({id,email,password}) {

  return (
<>
    <tr >
      <th scope='row'>{id}</th>
      <td>{email}</td>
      <td>{password}</td>
      <td className='px-3 '>
      <span>
       <button className='btn-primary '>Edit</button>
       <button className='btn-danger '>Delete</button>
       </span>
     </td>
    </tr>
   
</>
  )
}

export default UserRecord