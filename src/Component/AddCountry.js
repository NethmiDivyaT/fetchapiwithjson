import {useState} from "react";
import { v4 as uuid } from "uuid";


function AddCountry(props){
    const [countryname, setCountryName] = useState("");
    const [currency, setCurrency] = useState("");
    const [population, setPopulation] = useState("");
    const [flagurl, setFlagURL] = useState("");
    const [GDP, setGDP] = useState("");

    const AddButtonPressed = () => {
        props.AddCountry ({
            countryname:countryname,
            currency:currency,
            population:population,
            flagurl: flagurl,
            GDP:GDP,
        });
        setCountryName("");
        setCountryName("");
        setPopulation("");
        setFlagURL("");
        setGDP("");
    };

    const handelSubmit = (e) => {
        e.preventDefault();

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
            <h1>Add a Country</h1>
            <form>
                <label htmlFor="countryname"> Country Name : </label> <br></br>
                <input id="countryname" type="text" value={countryname} onChange={(e) => setCountryName(e.target.value)}/> <br></br>
                <label htmlFor="currency"> Currency : </label> <br></br>
                <input id="currency" type="text" value={currency} onChange={(e) => setCurrency(e.target.value)}/> <br></br>
                <label htmlFor="population"> Population : </label> <br></br>
                <input id="population" type="text" value={population} onChange={(e) => setPopulation(e.target.value)}/> <br></br>
                <label htmlFor="flagurl"> Flag URL : </label> <br></br>
                <input id="flagurl" type="text" value={flagurl} onChange={(e) => setFlagURL(e.target.value)}/> <br></br>
                <label htmlFor="GDP"> GDP : </label> <br></br>
                <input id="GDP" type="text" value={GDP} onChange={(e) => setGDP(e.target.value)}/> <br></br><br></br>
                <button onClick={handelSubmit} class="btnadd"> Add Country </button> <br></br><br></br><br></br>
            </form> <br></br><br></br><br></br><br></br>
        </div>
    )
}

export default AddCountry;