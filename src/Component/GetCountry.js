import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../App.css";
import EditForm from "./UpdateCountry";
import AddForm from "./AddCountry";

function CountryTable(props) {

  const [data, setData] = useState([]);

  const [showModel, setShowModel] = useState(false);
  const [columnData, setColumnData] = useState([]);

  const [showAddModel, setShowAddModel] = useState(false);

  const handelEdit =
    ([columnData]) =>
    () => {
      setShowModel(true);
      setColumnData(columnData);
    };

  const handelAdd = () => {
    setShowAddModel(true);
  };

    const handelDelete = (id) => () => {
    console.log(id);

           fetch("http://localhost:3000/Countries/" + id, {
          method: "DELETE",
        }).then(() => {
          console.log("delete");
        });
    
        window.location.reload();


      }

    const getData = () => {
    fetch("http://localhost:3000/Countries", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
          setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
       <br></br> <br></br>
      <div>
        <Button class="btn-hover color-1" onClick={handelAdd}>Add New Country </Button>
      </div> <br></br> <br></br> 

      <table>
        <thead>
          <tr>
            <th scope="col">Country Name</th>
            <th scope="col">Currency</th>
            <th scope="col">Population</th>
            <th scope="col">FlagURL</th>
            <th scope="col">GDP</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <tr>
                <td>{item.countryname}</td>
                <td> {item.currency} </td>
                <td>{item.population}</td>
                <td> <Button  class="btn-hover color-8"> <a href = { item.flagurl}> Flag </a> </Button> </td>
                <td>{item.GDP} </td>
                <td> <Button class="btn-hover color-2" onClick={handelEdit([item])} > Edit </Button> </td> 
                 <td> <Button class="btn-hover color-3" onClick={handelDelete(item.id)}> Delete </Button> </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal show={showModel}>
        <Modal.Body> <EditForm>{columnData}</EditForm> </Modal.Body>
       </Modal>

      <Modal show={showAddModel}>
        <Modal.Body> <AddForm /> </Modal.Body>
      </Modal>
    </div>
  );
}

export default CountryTable;