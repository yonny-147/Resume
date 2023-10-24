import { Navigate, Route, Routes } from "react-router-dom"
import { HomeComponent } from './routes/HomeComponent'
import { ProjectsComponent } from './routes/ProjectsComponent'
import { ContactComponent } from './routes/ContactComponent'
import { BarNavegation } from './components/BarNavegation'

export const App = () => {
  return (
  <>
    <BarNavegation/>
    <Routes>
      <Route path={"/"} element={ <HomeComponent/> }></Route>
      <Route path={"/projects"} element={ <ProjectsComponent/> }></Route>
      <Route path={"/contact"} element={ <ContactComponent/> }></Route>
      <Route path={"/*"} element={ <Navigate to="/"></Navigate> }></Route>
    </Routes>
  </>
  )
}
