import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  fetch('http://test-servic4/test')
    .then((res) => res.json())
    .then((data) => console.log("http://test-servic4/test" + "\n" + data.message))

    fetch('http://10.68.8.246/test')
    .then((res) => res.json())
    .then((data) => console.log("http://10.68.8.246/test" + "\n" + data.message))

  
    fetch('http://34.121.197.240/test')
    .then((res) => res.json())
    .then((data) => console.log("http://34.121.197.240/test" + "\n" + data.message))



  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>The Programming Lab</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        A work in progress. 
      </p>
    </div>
  )
}

export default App
