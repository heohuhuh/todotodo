import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import List from './List';
import { render } from "@testing-library/react";

function App() {
  let [할일,할일변경] = useState()
  let [목록,목록변경] = useState([])
  const onChange = (e) => {
    할일변경(e.target.value)
  };
  const 목록생성 = () =>{
    let listTodo = [...목록,할일];
    목록변경(listTodo)
  }
  return (
    <div className="todo">
      <p>일단 todo</p>
      <input className="input" 
      onChange={ onChange }
      onKeyDown={(e)=>{
        console.log(e)
        if(e.key === "Enter"){
          목록생성()
        }
      }}
      placeholder = "입력칸" value={ 할일 }></input>
      <button onClick={
          목록생성
      }>
        추가
      </button>
    <List test = { 목록 }/>
    </div>
  );
}

export default App;
