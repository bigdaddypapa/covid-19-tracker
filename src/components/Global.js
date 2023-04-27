import react, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Global() {
    const [latest, setLatest] = useState([])

    useEffect(() => {
       
            axios.get("https://corona.lmao.ninja/v2/all")
            .then(res => {
            setLatest(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  return (
    <div className="bg-gray-900 grid grid-cols-1 gap-10 px-10 py-10 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl:px-20">
    <section className="bg-yellow-800 p-4 rounded "> 
    <h1 className="font-bold text-3xl mb-4">Total Cases</h1>
    <h1 className="font-bold text-3xl mb-4">{latest.cases}</h1>
    <p>Last updated: {lastUpdated}</p>
    </section>
    <section className=" bg-red-800 p-4 rounded "> 
    <h1 className="font-bold  text-3xl mb-4">Total Deaths</h1>
    <h1 className="font-bold  text-3xl mb-4">{latest.deaths}</h1>
    <p>Last updated: {lastUpdated}</p>
    </section>
    <section className="bg-green-800 p-4 rounded "> 
    <h1 className="font-bold text-3xl mb-4">Total Recovered</h1>
    <h1 className="font-bold text-3xl mb-4">{latest.recovered}</h1>
    <p>Last updated: {lastUpdated}</p>
    </section>
    </div>
  )
   

   
  
}
