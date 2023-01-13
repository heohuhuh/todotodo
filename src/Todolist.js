import Todoitem from './Todoitem';

function Todolist({todoList,setTodoList}){//const {todoList,setTodoList} = props;
    
    const deleteList = (id)=> {
        const deletedList = todoList.filter(todoList => todoList.id !== id);
        setTodoList(deletedList)
    }
    const doneList = (id)=> {
        const clearedList = [...todoList];
        clearedList.forEach(list => {
            if(list.id === id) list.done = true;
        });
        setTodoList(clearedList)
    }

    return(
        <div >
            { todoList.filter((list) => list.done === false).map((todoList,i)=>(//초기값 공백 목록 추가x
                <Todoitem key={i} todoList={todoList} deleteList={deleteList} doneList={doneList}/>
            ))}
        </div>
    );
}

export default Todolist;
