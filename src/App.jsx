

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import About from './Pages/About'
import Works from './Pages/Works'
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import LayoutOne from './Layout/LayoutOne'


function App() {
  
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/'element={<LayoutOne/>}>
        
        <Route index element={<Home/>}/>
        <Route path='/resume'element={<Resume/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/works'element={<Works/>}/>
        <Route path='/blogs'element={<Blogs/>}/>
        <Route path='/contact'element={<Contact/>}/>
        
        
        </Route>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}

export default App
