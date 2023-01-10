import './list.css';

function List(props){

    return(
        <div >
            { props.test && props.test.map((item,i)=>(
                <div key={i} className="list">
                    <p>{ props.test[i] }</p>
                    <svg id='check' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                    </svg>
                    <button id='delete'>삭제</button>
                </div>
            ))}
        </div>
    );
}

export default List;