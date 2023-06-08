const root = document.querySelector('#root');
const api = 'https://api.spaceflightnewsapi.net/v3/blogs/';
function App() {
  const [activity, setActivity] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [edit, setEdit] = React.useState([]);
  function generateId() {
    return Date.now();
  }
  function editTodoHandler(todo) {
    setEdit(todo);
    setActivity(todo.activity);
    setMessage('');
  }
  function saveTodoHandler(e) {
    e.preventDefault();
    if (!activity) return setMessage('Harus ada todo baru bisa input kocak');
    if (edit.id) {
      const updatedTodo = {
        ...edit,
        activity
      };
      const editTodoIndex = todos.findIndex(todo => {
        return todo.id === edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activity: activity,
      done: false
    }]);
    setActivity('');
    setMessage('');
  }
  function deleteTodoHandler(todoId) {
    setTodos(todos.filter(item => {
      return item.id !== todoId;
    }));
    cancelEditHandler();
  }
  function cancelEditHandler() {
    setEdit({});
    setActivity('');
  }
  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: !todo.done
    };
    const editTodoIndex = todos.findIndex(currentTodo => {
      return currentTodo.id === todo.id;
    });
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;
    setTodos(updatedTodos);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple React Todo List"), message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red'
    }
  }, message), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    value: activity,
    type: "text",
    onChange: e => {
      setActivity(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", null, edit.id ? 'Edit' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "Batal edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.id
  }, /*#__PURE__*/React.createElement("input", {
    checked: item.done,
    onChange: doneTodoHandler.bind(this, item),
    type: "checkbox"
  }), item.activity, " ", item.done ? '(Selesai)' : '(Belum selesai)', /*#__PURE__*/React.createElement("button", {
    onClick: editTodoHandler.bind(this, item)
  }, "Edit"), /*#__PURE__*/React.createElement("button", {
    onClick: deleteTodoHandler.bind(this, item.id)
  }, "Hapus")))) : /*#__PURE__*/React.createElement("p", null, "Tidak ada todos"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);

// buat todo handler 
// generate id