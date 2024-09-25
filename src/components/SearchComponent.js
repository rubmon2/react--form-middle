import React, { useState } from 'react'
import { UserFetch } from '../hooks/UserFetch'
import { TablaUsers } from './TablaUsers'
import { UseFilter } from '../hooks/UseFilter'

export const SearchComponent = () => {

//estado para manejar el input
const [searchUsers, setSearchUsers]=useState("")

//fetch
const{users}=UserFetch("https://jsonplaceholder.typicode.com/users")



//onchange
const onInputChange=(event)=>{
setSearchUsers(event.target.value)
}

//fnx filter    
const {filter}=UseFilter(users, searchUsers)

  return (
    <div>
        <TablaUsers 
        filter={filter}
        onInputChange={onInputChange}
        searchUsers={searchUsers}
        >
        </TablaUsers>
    </div>
   
  )
}
