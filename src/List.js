import Listbody from './Listbody';

function List(props){
    
    return(
        <div >
            { props.todoList.map((item,i)=>(
                <Listbody todoList = { props.todoList } item = { item } listChange = { props.listChange } key = { i }/>
            ))}
        </div>
    );
}

export default List;