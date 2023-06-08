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
  function editTodoHandler(edit) {
    setEdit(edit);
    setActivity(edit.activity);
  }
  function cancelEditHandler() {
    setEdit({});
    setActivity('');
  }
  function saveTodoHandler(e) {
    e.preventDefault();
    if (!activity) {
      return setMessage('Todo Harus Diisi!');
    }
    if (edit.id) {
      const updatedTodo = {
        id: edit.id,
        activity
      };
      const editTodoIndex = todos.findIndex(todo => {
        return todo.id == edit.id;
      });
      const updatedTodos = [...todos];
      updatedTodos[editTodoIndex] = updatedTodo;
      setTodos(updatedTodos);
      return cancelEditHandler();
    }
    setTodos([...todos, {
      id: generateId(),
      activity
    }]);
    setActivity('');
    setMessage('');
    console.log(todos);
  }
  function deleteTodoHandler(id) {
    setTodos(todos.filter(item => item.id !== id));
    return cancelEditHandler();
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple Todo List"), message && /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? 'edit' : 'Tambah'), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: cancelEditHandler
  }, "batal edit")), todos.length > 0 ? /*#__PURE__*/React.createElement("ul", null, todos.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.id
  }, item.activity, /*#__PURE__*/React.createElement("button", {
    onClick: editTodoHandler.bind(this, item)
  }, "edit"), /*#__PURE__*/React.createElement("button", {
    onClick: deleteTodoHandler.bind(this, item.id)
  }, "hapus")))) : /*#__PURE__*/React.createElement("p", null, "Tidak ada data Todo list"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);

// buat todo handler 
// generate id