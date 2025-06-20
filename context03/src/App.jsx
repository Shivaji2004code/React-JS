import React, { useEffect, useState } from 'react';
import {Todoprovider} from "./Context/TodoContext"
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((ptodo) => ptodo.id !== id))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevs) => prevs.id === id ? {...prevs, completed: !prevs.completed} : prevs))
  }

  useEffect (() => {
    const ltodos = JSON.parse(localStorage.getItem("todos"));

    if(ltodos && ltodos.length > 0) {
      setTodos(ltodos);
    }
  }, [])

  useEffect (() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <Todoprovider value ={{todos, addTodo, removeTodo, updateTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                {/* Todo form goes here */} 
                <TodoForm />
              </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (<div key={todo.id} className='w-full'> 
                <TodoItem todo={todo}/>
              </div>
            ))}
            </div>
          </div>
      </div>
    </Todoprovider>
  );
}

export default App;
