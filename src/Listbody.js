import styled from 'styled-components';

//스타일
const Listline = styled.div`
    background: #eee;
    padding: 1px;
    margin: 3px;
    display: flex;
    border-radius: 5px;
    align-items: center;
`
const Tag = styled.p`
    font-size: 1rem;
    margin: 3px 10px 3px 10px;
    padding: 5px 90px 5px 5px;
`
const Checkbox = styled.svg`
    position: fixed;
    right: 30px;
    color: green;
    margin: 50px;
    cursor: pointer;
`
const Delete = styled.button`
    position: fixed;
    right: 10px;
    color: rgb(139, 0, 0);
    margin: 20px;
    cursor: pointer;
    font-weight: bold;
    border-style: none;
`
//컴포넌트
function Listbody(props){
    const deleteList = (todolist,item)=> {
        const clone = todolist.splice(i,1)
        console.log(clone)
        const cloneList = [...clone]
        return cloneList;
    }


    return(
        <div>
            <Listline>
                <Tag> { props.item } </Tag>
                <Checkbox xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </Checkbox>
                <Delete onClick={()=>{
                    const deleteItem = deleteList(props.todoList,props.key)
                    props.listChange(deleteItem);
                    }}>삭제
                </Delete>
            </Listline>
            
        </div>
    )
}

export default Listbody;