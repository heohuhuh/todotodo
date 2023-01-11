import Listbody from './Listbody';

function List(props){
    
    return(
        <div >
            { props.todoList.filter((list,index) => index !== 0).map((item,i)=>(//초기값 공백 목록 추가x
                <Listbody key = { i } todoList = { props.todoList } item = { item.todo } listChange = { props.listChange } id = { item.id }/>
            ))}
        </div>
    );
}

export default List;