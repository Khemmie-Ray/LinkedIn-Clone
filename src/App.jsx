import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import './sass/App.scss'
import LogIn from "./pages/LogIn";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route index element={<LogIn />} />
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
