import  { useEffect, useState } from 'react'

export const UserFetch = (url) => {

//estado 

const [users,Setusers]=useState([])

//funcion fetch asyncrona
const userFecthFnx=async()=>{
try {
    const response= await fetch(url)
    const data= await response.json()
    Setusers(data)
} catch (error) {
    console.error("Esto es un error de: ",error)
}
}

//useeffect
useEffect(()=>{userFecthFnx()},[])


  return {
    ...users,
    users
  }
}
