import Todoitem from './Todoitem';

function Todolist({todoList,setTodoList}){//const {todoList,setTodoList} = props;
    
    const deleteList = (id)=> {
        const deletedList = todoList.filter(todoList => todoList.id !== id);
        setTodoList(deletedList)
    }
  
    return(
        <div >
            {console.log(todoList)}
            { todoList.filter((list,index) => index !== 0).map((todoList,i)=>(//초기값 공백 목록 추가x
                <Todoitem key={i} todoList={todoList} deleteList={deleteList}/>
            ))}
        </div>
    );
}

export default Todolist;