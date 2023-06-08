const root = document.querySelector('#root');
const api = 'https://api.spaceflightnewsapi.net/v3/blogs/'
function App(){
    const [activity,setActivity] = React.useState('');
    const [message,setMessage] = React.useState('');
    const [todos,setTodos] = React.useState([]);
    const [edit,setEdit] = React.useState([]);
    function generateId(){
        return Date.now();
    }
    function editTodoHandler(todo){
        setEdit(todo);
        setActivity(todo.activity)
        setMessage('')
    }
    function saveTodoHandler(e){
        e.preventDefault();
        if(!activity) return setMessage('Harus ada todo baru bisa input kocak');
        if(edit.id){
            const updatedTodo = {
                ...edit,
                activity
            }
            const editTodoIndex = todos.findIndex((todo)=>{
                return todo.id === edit.id
            });

            const updatedTodos = [...todos];

            updatedTodos[editTodoIndex] = updatedTodo;
            setTodos(updatedTodos);
            return cancelEditHandler();
            
        }
        setTodos([...todos,{
            id:generateId(),
            activity:activity,
            done:false
        }]);
        setActivity('');
        setMessage('');
    }
    function deleteTodoHandler(todoId){
        setTodos(todos.filter((item)=>{return item.id !== todoId}))
        cancelEditHandler();
    }

    function cancelEditHandler(){
        setEdit({});
        setActivity('');
    }
    function doneTodoHandler(todo){
      const updatedTodo = {
        ...todo,
        done : !todo.done
      }
      const editTodoIndex = todos.findIndex((currentTodo)=>{
        return currentTodo.id === todo.id
    });

    const updatedTodos = [...todos];

    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
    }
    return (<>
        <h1>Simple React Todo List</h1>
        {message && <div style={{ color:'red' }}>{message}</div>}
        <form onSubmit={saveTodoHandler}>
            <input value={activity} type="text" onChange={(e)=>{setActivity(e.target.value)}} />
            <button>{edit.id ? 'Edit' : 'Tambah'}</button>
            {edit.id && <button onClick={cancelEditHandler}>Batal edit</button>}
        </form>
        {todos.length > 0 ?         <ul>
            {todos.map(item=><li key={item.id}>
                <input checked={item.done} onChange={doneTodoHandler.bind(this,item)} type="checkbox" />
                {item.activity} {item.done ? '(Selesai)' : '(Belum selesai)'}
                <button onClick={editTodoHandler.bind(this,item)}>Edit</button>
                <button onClick={deleteTodoHandler.bind(this,item.id)}>Hapus</button>
            </li>)}
        </ul> : <p>Tidak ada todos</p>}
    </>)
}

ReactDOM.render(<App />, root);

// buat todo handler 
// generate id 