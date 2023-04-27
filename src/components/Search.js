import React , {useState, useEffect} from 'react'

const Search = () => {
  const [userInput, setUserInput] = useState("");
  
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  

  return (
    <section className="bg-gray-900">
      <form  className="w-9/12 mx-auto pt-3 pb-10 lg:w-1/2">
        <input onChange = {handleSearch}
         
          placeholder="Search For a Country"
          className="bg-green-500 text-white text-xl placeholder-white font-bold tracking-widest w-full py-2 px-5 rounded"
        />
        </form>
    </section>
  )
}

export default Search
