import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <div className="items-container">
        <AddToDo />
        <ToDoItem1></ToDoItem1>
        <ToDoItem2></ToDoItem2>
      </div>
    </center>
  );
}

export default App;
