import React from 'react'

export const TablaUsers = ({filter,searchUsers,onInputChange}) => {

  return (
<div>
        <div>
            <input
            placeholder='Buscar usuario'
            name='searchUsers'
            value={searchUsers}
            onChange={onInputChange}
            ></input>
        </div>
    <table className="table">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
     
      </tr>
    </thead>
    <tbody>
    {filter.map(user=>(  
        <tr key={user.id}>
        <th scope="row">{user.name}</th>
        <td>{user.username}</td>
      </tr>))}
    </tbody>
  </table>
  </div>
  )
}
