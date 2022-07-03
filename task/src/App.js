// Importing react, useState, CSS and axios
import React from "react";
import { useState } from "react";
import './App.css';
import axios from 'axios';

//Initializing axios for sending request to backend
const api = axios.create({
  baseURL: `http://localhost:80/backend/`
})

const App = () => {

  //Creating 4 state variables for 3 input fields and 1 select element 
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0); 
  const [result, setResult] = useState(""); 
  const [operator, setOperator] = useState("+"); 

  //Creating function for handling form submission
  const handleSubmit = (event) => {

    //Checking if number fields are empty
    if(firstNumber === "" || secondNumber === ""){
      alert(`Number Cannot be empty!`);
    }else{

      //Creating post request with axios
      api.post(
        '/', 
        JSON.stringify({
          operator: operator,
          firstNumber: firstNumber,
          secondNumber: secondNumber
        })
      ).then((res) => {
        //Showing result according to response
        if(res.data.response === '200'){
          setResult(res.data.message)
        }else{
          alert('Error!');
        }
      }).catch(error => {
        //Showing error if occurs
        alert(error.message);
      });
    }

    //Preventing default submission
    event.preventDefault();
  }

  return (
    <div className="App">

      {/* Div containing the whole calculator */}
      <div className="formdiv">

        <h1>Emoji Calculator</h1>

        {/* Creating form containing input fields */}
        <form onSubmit={handleSubmit} className="form">
                      
          <label>First Number:</label>
          <input type="number" value={firstNumber} onChange={(event) => {setFirstNumber(event.target.value)}} />
          
          <label>Second Number:</label>
          <input type="number" value={secondNumber} onChange={(event) => {setSecondNumber(event.target.value)}} />

          <label>Operator:</label>
          <select value={operator} onChange={(event) =>{setOperator(event.target.value)}}>
            <option value="+">{String.fromCodePoint('0x1F47D')}</option>
            <option value="-">{String.fromCodePoint('0x1F480')}</option>
            <option value="*">{String.fromCodePoint('0x1F47B')}</option>
            <option value="/">{String.fromCodePoint('0x1F631')}</option>
          </select>

          <input type="submit" value="Calculate"/>  

          {/* This textfield is for showing result and it is readonly */}
          <div className="resultdiv">
            <label>Result:</label>
            <input type="text" value={result} readOnly='readonly'/>       
          </div>      

        </form>
      </div>
    </div>
  );
}

export default App;
