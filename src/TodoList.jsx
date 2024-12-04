import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todo, setTodo] = useState([]); //To store the array
  let [newTask, setnewTask] = useState(""); //for the value we type in input box

  function addTodo() {
    {
      if (newTask == "") {
        return;
      }
    }
    //Add task to our array
    setTodo((prevVal) => {
      //We are using CallBack Because Old task depends on new task and it is asynchronous
      return [...prevVal, { todo: newTask, id: uuidv4(), isDone: false }];
    });
    setnewTask(""); //To clear the input box
  }

  function addnewTask(event) {
    //updates the newTask value to the value written in input box
    setnewTask(event.target.value); //event.target.value will help to keep get the value enterd at input box
  }

  function DeleteTodo(id) {
    //Takes the id and removes it form the Array
    let copy = todo.filter((a) => a.id != id); //Filter method returns the array according to given condition

    setTodo(() => {
      //This setTodo will re-render so that we see the changed array
      return [...copy];
    });
  }

  function UpperCaseOne(id) {
    let copy = todo.map((a) => {
      if (a.id == id) {
        return { ...a, todo: a.todo.toUpperCase() }; //If id is same then it will change to UpperCase
      } else {
        return a; //Else the value will be same
      }
    });
    setTodo(() => [...copy]);
  }

  function UpperCaseAll() {
    //All the vlaues will be changes to UpperCase one by one and will be stored in copy array
    let copy = todo.map((a) => {
      return { ...a, todo: a.todo.toUpperCase() };
    });
    setTodo(() => [...copy]);
  }

  function MarksAsDone(id) {
    let copy = todo.map((a) => {
      if (a.id == id) {
        return { ...a, isDone: true };
      } else {
        return a;
      }
    });

    setTodo(() => [...copy]);
  }

  function MarksAsDoneAll() {
    let copy = todo.map((a) => {
      return { ...a, isDone: true };
    });
    setTodo(() => [...copy]);
  }

  function DeleteAll() {
    let ans = prompt(
      `Are you Sure?\nIt will delete all the tasks\nPress y for Yes and n for No`
    );
    if (ans == "y") {
      setTodo(() => {
        return [];
      });
    }
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={newTask} onChange={addnewTask}></input>
      {/* Here, valeu = {newTask} updates the value of input as the value of newTask */}
      &nbsp;
      <button onClick={addTodo} placeholder="Enter Task to add">
        Add
      </button>
      <br></br>
      <hr></hr>
      <h2>Todo List</h2>
      <ul>
        {/* It is a JS code. So, we need to give curly braces to makes jsx
        understand that it is js code */}
        {todo.map((a) => {
          let Styles;
          if (a.isDone) {
            Styles = { textDecoration: "line-through", color: "purple" };
          }
          return (
            <li key={a.id}>
              <span style={Styles}>{a.todo} </span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => DeleteTodo(a.id)}>Delete</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => UpperCaseOne(a.id)}>UpperCase</button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => MarksAsDone(a.id)}>Mark as Done</button>
              &nbsp; &nbsp; &nbsp;
              <hr></hr>
            </li>
          );
        })}
      </ul>
      <button onClick={UpperCaseAll}>UpperCase ALL</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={() => MarksAsDoneAll()}>Mark All as Done</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={() => DeleteAll()}>Delete All</button>
    </div>
  );
}
