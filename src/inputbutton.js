import React, { useState } from "react";


function Inputbutton(props){
    const [todo,setTodo] = useState('')

    const onChange = (e) => {
      setTodo(e.target.value)
    };
    
    const listAdd = (item,list) =>{
      const listTodo = [...list];
      if(item !== ''){
        const listTodoValue = [...list,item];
        return listTodoValue;
      }
      return listTodo;
    }

    return(
        <div>
            <input className="input" onChange={ onChange } onKeyDown={(e)=>{
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
