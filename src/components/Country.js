import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Country() {

    const [results, setResults] = useState([]);
    const [userInput, setUserInput] = useState("");

    useEffect(() => {
    
        axios.get("https://corona.lmao.ninja/v2/countries")
             
        .then((res) => {
            setResults(res.data);
           
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      
      const handleSearch = (e) => {
        setUserInput(e.target.value);
      };
      
     const countryFilter = results.filter (item =>
        {
            return item.country === userInput
        })   
        const countries = countryFilter.map((data, i) => {
            return (
              <Card
                key={i}
                style={{ width: '18rem' }}
                border="primary"
              >
                <Card.Img variant="top" src={data.countryInfo.flag} />
                <Card.Body>
                  <Card.Title>{data.country}</Card.Title>
                  <Card.Text>Cases {data.cases}</Card.Text>
                  <Card.Text>Deaths {data.deaths}</Card.Text>
                  <Card.Text>Recovered {data.recovered}</Card.Text>
                  <Card.Text>Active {data.active}</Card.Text>
                  <Card.Text>Critical {data.critical}</Card.Text>
                </Card.Body>
              </Card>
            );
          });
  return (
    <div>
    <div className="covidData__input">
        <form>
          {/* input county name */}
          <input onChange={handleSearch} placeholder="Enter Country Name" />
          <br />
          <button type="submit">Search</button>
        </form>
      </div>
      
             <div className="covidData__country__info">
      
                {countries}
      </div>
      </div>
      
      )
}
