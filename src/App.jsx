import { useState } from 'react'
import TodoList from './components/TodoList'
import "./styles/index.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TodoList></TodoList>
     

    </div>
  )
}

export default App
