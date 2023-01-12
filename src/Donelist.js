import Doneitem from './Doneitem';

function Donelist({todoList,setTodoList}){//const {todoList,setTodoList} = props;
    
    const deleteList = (id)=> {
        const deletedList = todoList.filter(todoList => todoList.id !== id);
        setTodoList(deletedList)
    }
    const redoList = (id)=> {
        const clearedList = [...todoList];
        clearedList.forEach(list => {
            if(list.id === id) list.done = false;
        });
        setTodoList(clearedList)
    }

    return(
        <div >
            { todoList.filter((list) => list.done === true).map((todoList,i)=>(
                <Doneitem key={i} todoList={todoList} deleteList={deleteList} redoList={redoList}/>
        ))}
        </div>
    );
}

export default Donelist;
