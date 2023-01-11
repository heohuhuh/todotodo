import React, { useState } from "react";


function Inputbutton(props){
    const [todo,setTodo] = useState('')

    const onChange = (e) => {
      setTodo(e.target.value)
    };
    
    const listAdd = (item,list) =>{
      const listTodo = list;
      let idNumber = Number(list[list.length-1].id) + 1; //id 번호 부여는 제일 끝 id 번호에 +1
      const todoValue = {
        id : idNumber,
        todo : item
      }
      if(item !== ''){
        const listTodoValue = list.concat(todoValue);
        return listTodoValue;
      }
      return listTodo;
    }

    return(
        <div>
            <input onChange={ onChange } onKeyDown={(e)=>{
                if(e.key === "Enter"){
                const addList = listAdd(todo,props.todoList)
                props.setTodoList(addList)
                };
            }} placeholder = "입력하세요~" value={ todo }></input>
            <button onClick={()=>{
                const addList = listAdd(todo,props.todoList)
                props.setTodoList(addList)
            }}>추가</button>
        </div>
    )
}

export default Inputbutton;
