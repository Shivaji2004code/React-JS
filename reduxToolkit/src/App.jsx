import { Provider } from "react-redux"
import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"
import { Store } from "./Store/Store"

function App() {


  return (
    <Provider store={Store} >
      <div className="w-full h-screen bg-black mx-auto text-white ">
      <AddTodo />
      <Todo />
      </div>
    </Provider>
  )
}

export default App
