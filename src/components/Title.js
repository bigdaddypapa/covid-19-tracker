import React from 'react'

const Title = () => {
  return (
    <>
      <header className="bg-gray-900">
        <h1 className="font-bold text-purple-400 text-4xl text-center py-4">
          Covid 19 App
        </h1>
      </header>
      <div className="bg-gray-900">
        <p className="text-white text-center px-10">
          This app uses an API which is updated daily.
        </p>
        <div className="text-white flex items-center justify-center">
        
          <a
            href='https://corona.lmao.ninja/v2/countries'
            target="_blank"
            rel="noopenner noreferrer"
            className="bg-green-500 mx-2 px-4 py-1 rounded mt-5 transition-colors hover:bg-green-800"
          >
            API Documentation
          </a>
        </div>
      </div>
    </>
  )
}

export default Title
