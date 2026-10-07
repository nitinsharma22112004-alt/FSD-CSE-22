import React from 'react'
import Book from "./Book"
const Home = () => {
  const bookdata=[
    {image:"",title:"ReactJS",price:375},
    {image:"",title:"NodeJS",price:457},
    {image:"",title:"ExpressJS",price:799}
  ]
  return (
    <div className='home'>
      <div className="bookstore">
        {
          bookdata.map((b,index)=>{
            return <Book 
          })
        }
      </div>
    </div>
  )
}

export default Home