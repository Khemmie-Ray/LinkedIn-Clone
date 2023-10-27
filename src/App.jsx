import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import React, { createContext, useContext } from "react";
import './sass/App.scss'
import LogIn from "./pages/LogIn";
import Feed from "./pages/Feed";
import Layout from "./component/Layout";
import Work from "./pages/Work";

const userContext = createContext(null)

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route index element={<LogIn />} />
  <Route element={<Layout />}>
  <Route path="/home" index element={<Feed />} />
  <Route path="/work" element={<Work />} />
  </Route>
  </Route>
))

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div> 
  )
}

export default App
