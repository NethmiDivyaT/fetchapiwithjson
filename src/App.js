import {useState} from "react";
import AddCountry from './Component/AddCountry';
import CountryDataDisplay from "./Component/GetCountry"


function App() {
  
  return (
    <div className="content">
      <AddCountry />
      <CountryDataDisplay/>
    </div>
  );
}

export default App;
