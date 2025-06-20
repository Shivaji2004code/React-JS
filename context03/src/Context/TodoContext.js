import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id : 1,
        todo : "todo msg",
        completed : false
    }],
    addTodo : (todo) => {},
    removeTodo : (id) => {},
    updateTodo : (id,todo) => {},
    toggleComplete : (id) => {}

})

export const Todoprovider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}