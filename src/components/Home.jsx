import React from 'react'

const Home = () => {
  return (
    <>
    <h1 className="text-white text-center my-6 text-xl">
          Bienvenido a <span className="text-4xl text-white font-bold">Happy Cake</span>
    </h1>
      <p className="text-center text-white">El lugar de los pasteles felices</p>
        <div className="img-cont">
              <img className='cake'
                  src="https://www.svgrepo.com/show/404839/birthday-cake.svg"
                  alt="birthday-cake" />
        </div>
    </>
    
  )
}

export default Home