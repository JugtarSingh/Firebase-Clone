import { useEffect } from 'react'
import './App.css'
import { pingApi } from './apis/ping.js'
import { Route, Routes } from 'react-router-dom'
import { CreateProject } from './pages/CreateProject.jsx'

function App() {
  

  
  return (
    <Routes>
      <Route path='/' element={<CreateProject/>}/>
    </Routes>
  )
}

export default App
