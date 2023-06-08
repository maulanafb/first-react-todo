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
    function editTodoHandler(edit){
        setEdit(edit);
        setActivity(edit.activity)
    }
    function cancelEditHandler(){
        setEdit({});
        setActivity('');
    }
    function saveTodoHandler(e){
        e.preventDefault();
        if(!activity){
            return setMessage('Todo Harus Diisi!')
        }
        if(edit.id){
            const updatedTodo = {
                id:edit.id,
                activity
            }

            const editTodoIndex = todos.findIndex((todo)=>{
                return todo.id == edit.id
            });
            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = updatedTodo;

            setTodos(updatedTodos)
            
            return cancelEditHandler();
        }
        setTodos([...todos,{
            id:generateId(),
            activity
        }]);

        setActivity('');
        setMessage('');
        console.log(todos);
    }

    function deleteTodoHandler(id){
            setTodos(todos.filter(item=>item.id!==id));

            return cancelEditHandler();
        }



    return (
        <>
            <h1>Simple Todo List</h1>
            {message && <div style={{ color:'red' }}>{message}</div>}
            <form onSubmit={saveTodoHandler}>
                <input value={activity} type="text" onChange={(e)=>{
                    setActivity(e.target.value);
                }}/>
                <button type="submit">{edit.id ? 'edit' : 'Tambah'}</button>
                {edit.id && <button onClick={cancelEditHandler}>batal edit</button>}
            </form>
                {todos.length > 0 ? <ul>{todos.map(item=><li key={item.id}>{item.activity}
                    <button onClick={editTodoHandler.bind(this,item)}>edit</button>
                    <button onClick={deleteTodoHandler.bind(this,item.id)}>hapus</button>
                </li>)}
                            </ul> :<p>Tidak ada data Todo list</p>    
            }
        </>
    )
}

ReactDOM.render(<App />, root);

// buat todo handler 
// generate id 