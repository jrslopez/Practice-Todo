import React, { Fragment, useState, useEffect } from "react"

const ListTodos = () => {
  const [todos, setTodos] = useState([])
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
            <tr>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodos
