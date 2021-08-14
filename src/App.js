import logo from './logo.svg';
import './App.scss';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
// import { VisibilityFilter } from './components/VisibilityFilter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <body className="App-body">
      <AddTodo />
      <TodoList />
      {/* <VisibilityFilter /> */}
      </body>
      </header>
    </div>
  );
}

export default App;
