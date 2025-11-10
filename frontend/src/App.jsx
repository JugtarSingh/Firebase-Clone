import { useEffect } from 'react'
import './App.css'
import { pingApi } from './apis/ping.js'
import { Route, Routes } from 'react-router-dom'
import { CreateProject } from './pages/CreateProject.jsx'
import TemplatePage from './pages/TemplatePage.jsx'

function App() {
  

  
  return (
    <Routes>
      <Route path='/' element={<CreateProject/>}/>
      <Route path='/templates' element={<TemplatePage />}/>
    </Routes>
  )
}

export default App
