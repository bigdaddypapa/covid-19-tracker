import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FetchData = () => {
  const [countries, setCountries] = useState([])
  const [userInput, setUserInput] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get('https://corona.lmao.ninja/v2/countries')
      setCountries(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  
  const filterCountries = countries.filter((item) => {
    return  userInput !== ""
      ? item.country.toLowerCase().includes(userInput.toLowerCase())
      : item;
  });
 
   
      
       const displayCountries =  filterCountries.map((Country,) => {
          const {
            country,
            countryInfo,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
            active,
          } = Country
console.log(Country)
          return ( 
            <section key={country}>
            <div  className="bg-gray-800 p-4 rounded">
              <h2 className="font-bold text-green-400 text-3xl mb-4">
                {country}, <span className="font-light">{countryInfo.iso2}</span>
              </h2>

              <ul>
                <li className="flex justify-between my-2 text-red-300">
                  <span className="font-bold"> Cases:</span>
                  {cases}
                </li>
                <li className="flex justify-between my-2 text-blue-300">
                  <span className="font-bold">Today Cases:</span>
                  {todayCases}
                </li>
                <li className="flex justify-between my-2 text-yellow-300">
                  <span className="font-bold"> Deaths:</span> {deaths}
                </li>
                <li className="flex justify-between my-2 text-purple-300">
                  <span className="font-bold">Today Deaths:</span> {todayDeaths}
                </li>
                <li className="flex justify-between my-2 text-green-300">
                  <span className="font-bold">Recovered:</span>
                  {recovered}
                </li>
                <li className="flex justify-between my-2 text-pink-300">
                  <span className="font-bold">Today Recovered :</span>
                  {todayRecovered}
                </li>
                <li className="flex justify-between my-2 text-indigo-300">
                  <span className="font-bold">Active :</span>
                  {active}
                </li>
              </ul>
            </div>
      </section>
          )
        })
        return (
          <div >
          <section className="bg-gray-900">
            <form  className="w-9/12 mx-auto pt-3 pb-10 lg:w-1/2">
              <input onChange = {handleSearch}
               
                placeholder="Search For a Country"
                className="bg-green-500 text-white text-xl placeholder-white font-bold tracking-widest w-full py-2 px-5 rounded"
              />
              </form>
          </section>
          <section className="bg-gray-900 grid grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20"> 
          {displayCountries}</section>
          </div>
        )
      }

export default FetchData
