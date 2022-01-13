import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

function UpdateCountry({ children }) {
  const [id, setId] = useState(children.id);
  const [countryname, setCountryName] = useState(children.countryname);
  const [currency, setCurrency] = useState(children.currency);
  const [population, setPopulation] = useState(children.population);
  const [flagurl, setFlagUrl] = useState(children.flagurl);
  const [GDP, setGDP] = useState(children.GDP);

  const handelSubmit = (e) => {
    e.preventDefault();

    const item = { id, countryname, currency, population, flagurl, GDP };

    console.log(item);
  
        fetch("http://localhost:3000/Countries/" + id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }).then(() => {
          console.log(item);
        });

        window.location.reload();

    }
    
  return (
    <div>
      <Form onSubmit={handelSubmit}>
         <Form.Group>
          <Form.Label>Country Name</Form.Label>
          <Form.Control type="text" value={countryname} onChange={(e) => setCountryName(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Currency</Form.Label>
          <Form.Control type="text" value={currency} onChange={(e) => setCurrency(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Population</Form.Label>
          <Form.Control type="text" value={population} onChange={(e) => setPopulation(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>Flag URI</Form.Label>
          <Form.Control type="text" value={flagurl} onChange={(e) => setFlagUrl(e.target.value)}/>
        </Form.Group>

        <Form.Group>
          <Form.Label>GDP</Form.Label>
          <Form.Control type="text" value={GDP} onChange={(e) => setGDP(e.target.value)}/>
        </Form.Group>

        <Button type="submit"> Update </Button>
      </Form>
    </div>
  );
}

export default UpdateCountry;