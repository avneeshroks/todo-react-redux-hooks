import './App.css';
import { Provider } from "react-redux";
import store from "./utils/redux";
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
          <TodoForm />
          <TodoList />
      </div>
    </Provider>
  );
}

export default App;
