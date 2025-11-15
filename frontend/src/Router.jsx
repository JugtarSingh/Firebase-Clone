import { Route, Routes } from "react-router-dom"
import  CreateProject  from "./pages/CreateProject"
import TemplatePage from "./pages/TemplatePage"
import ProjectPlayground from "./pages/ProjectPlayground"

export const Router = ()=>{
    return (
    <Routes>
      <Route path='/' element={<CreateProject/>}/>
      <Route path='/templates' element={<TemplatePage />}/>
      <Route path='/projects/:projectId' element={<ProjectPlayground />} />
    </Routes>
    )
}