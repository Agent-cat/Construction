import React from 'react'
import logo from './assets/logo.png'
const App = () => {
  return (
    <div className='w-full flex  flex-col justify-center items-center h-screen bg-black'>
      <img src={logo} alt='logo' className='w-[300px] md:w-[400px]' />
      <h1 className='text-white text-4xl font-bold text-center '>
        Website is under construction
      </h1>
    </div>
  )
}

export default App