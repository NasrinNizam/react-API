
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [data , setData] = useState([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setData(json))
  } , [])
  

  return (
    <>
      
      <div className="main flex flex-wrap gap-10">
        {
          data.map((item)=>{
           return(
            <div className="single w-[350px] h-[400px] bg-[#005C78] rounded-[20px] p-5 flex items-center flex-col gap-5">
            <div className="img-col w-[150px] h-[150px] rounded-full overflow-hidden ">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/028/794/707/small_2x/cartoon-cute-school-boy-photo.jpg" alt="img" />
            </div>
            <div className='text'>
              <p className='text-lg font-semibold text-white'>User ID :{item.id} </p>
              <h1 className='text-xl font-bold text-white'>User Name :{item.name} </h1>
              <p className='text-lg font-semibold text-white'>Email :{item.email} </p>
            </div>
          </div>
           )
          })
        }
      </div>

    </>
  )
}

export default App
