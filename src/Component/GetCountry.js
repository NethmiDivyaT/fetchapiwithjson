import React,{useState,useEffect} from 'react';
import '../App.css';

function  CountryDataDisplay() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch("http://localhost:3000/Countries"
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
	return (
    <div>
      <table>
			<thead>
				<tr>
				<td> Country Name</td>
        <td>Currency</td>
        <td>Population</td>
        <td>FlagURL</td>
       <td>GDP</td>
				</tr>  
			</thead>
			<tbody>
     {
      data && data.length>0 && data.map((countrydata)=>
          <tr>
            <td>{countrydata.countryname}</td>
            <td>{countrydata.currency}</td>
            <td>{countrydata.population}</td>
            <td><a href = {countrydata.flagurl}> Flag </a></td>
            <td>{countrydata.GDP}</td>
          </tr>
      )
     }
    </tbody>
		</table>
    </div>
  );
}	   

export default CountryDataDisplay;