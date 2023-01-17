import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./components/TodoContainer"
//stylesheet
import "./App.css"
ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>,
ReactDOM.render(<TodoContainer />, document.getElementById("root"))
)
