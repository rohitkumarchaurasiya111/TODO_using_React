import "./App.css"; //-> Here, We are importing App.css which contains all the css for our App
import TodoList from "./TodoList";

function App() {
  let style = {};
  return (
    <div style={style}>
      <TodoList />
    </div>
  );
}

export default App;
