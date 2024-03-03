import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import Header from "./components/Header"
import FooterCom from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
export default function App() {
  return (

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  
  )
}
