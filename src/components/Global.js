import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Global() {

    const [latest, setLatest] = useState([]);

    useEffect(() => {
    
        axios.get("https://corona.lmao.ninja/v2/all")
             
        .then((res) => {
            setLatest(res.data);
           
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    
      const date = new Date(parseInt(latest.updated));
      const lastUpdated = date.toString();
  return (
    <div><CardGroup>
      <Card bg = "secondary" text = "white" border= "dark">
        
        <Card.Body>
          <Card.Title>Cases</Card.Title>
          <Card.Text>
         <h2> {latest.cases}</h2>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>{lastUpdated}</small>
        </Card.Footer>
      </Card>
      <Card bg = "danger" text = "white">
        
        <Card.Body>
          <Card.Title>Deaths</Card.Title>
          <Card.Text>
          <h2>{latest.deaths}</h2>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>{lastUpdated}</small>
        </Card.Footer>
      </Card >
      <Card bg = "success" text = "white">
        
        <Card.Body>
          <Card.Title>Recovered</Card.Title>
          <Card.Text>
          <h2>{latest.recovered}</h2>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>{lastUpdated}</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}
