import React from 'react'
import userData from '../constants/data'

function Hero() {
  return (
    <div>
        <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700  my-2">Developer</h1>
        <h1 className="text-4xl md:text-8xl font-bold text-red-700  my-2">Designer</h1>
        <h1 className="text-4xl md:text-8xl font-bold text-yellow-500  my-2">Programer</h1>
        <h1 className="text-4xl md:text-8xl font-bold text-green-500  my-2">Youtuber</h1>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="avatar" src={userData.avatarUrl}/>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Hero