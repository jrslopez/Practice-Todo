import React, { Fragment, useState, useEffect } from "react"

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  //delete todo

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:4000/todos/${id}`, {
        method: "DELETE",
      })

      setTodos(todos.filter((todo) => todo.todo_id !== id))
    } catch (error) {
      console.error(error.message)
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:4000/todos")
      const jsonData = await response.json()

      setTodos(jsonData)
    } catch (error) {
      console.error(error.message)
    }
  }
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodos
