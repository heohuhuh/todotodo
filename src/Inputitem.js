import React, { useState } from "react";


function Inputitem({todoList,setTodoList}){
  const [todo,setTodo] = useState('')
  const onChange = (e) => {
    setTodo(e.target.value)
  };
  
  const addTodo = (todo,list) =>{
      const idNumber = Number(list[list.length-1].id) + 1; //id 번호 부여는 제일 끝 id 번호에 +1해서 꼬임방지
      const todoValue = {
        id : idNumber,
        todo : todo
      }
      if(todo !== ''){        
          return setTodoList(list.concat(todoValue))
      }
      return setTodoList(list)
    }

  return(
      <div>
          <input onChange={ onChange } onKeyDown={(e)=>{
              if(e.key === "Enter"){
              addTodo(todo,todoList)
              };
          }} placeholder = "입력하세요~" value={ todo }></input>
          <button onClick={()=>{
              addTodo(todo,todoList)
          }}>추가</button>
      </div>
  )
}

export default Inputitem;
