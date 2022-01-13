import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function AddCountry() {
   const [countryname, setCountryName] = useState("");
  const [currency, setCurrency] = useState("");
  const [population, setPopulation] = useState("");
  const [flagurl, setFlagUrl] = useState("");
  const [GDP, setGDP] = useState("");
  
  const handelSubmit = (e) => {

    const id = uuid();

      const item = { id, countryname, currency, population, flagurl, GDP };

     fetch("http://localhost:3000/Countries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });

  };

  return (
    <div>
      <Form onSubmit={handelSubmit}>
        <Form.Group>
          <Form.Control type="text" value={countryname} placeholder="Enter Country Name...." onChange={(e) => setCountryName(e.target.value)}/> <br></br>
        </Form.Group>

        <Form.Group>
          <Form.Control type="text" value={currency} placeholder="Enter Currency..." onChange={(e) => setCurrency(e.target.value)} /><br></br>
        </Form.Group>

        <Form.Group>
          <Form.Control type="text" value={population} placeholder="Enter Population..." onChange={(e) => setPopulation(e.target.value)}/><br></br>
        </Form.Group>

        <Form.Group>
          <Form.Control type="text" value={flagurl} placeholder="Enter Flag URL..." onChange={(e) => setFlagUrl(e.target.value)}/><br></br>
        </Form.Group>

        <Form.Group>
          <Form.Control type="text" value={GDP} placeholder="Enter GDP..." onChange={(e) => setGDP(e.target.value)}/><br></br>
        </Form.Group>

        <Button type="submit"> Submit </Button>
      </Form>
    </div>
  );
}

export default AddCountry;