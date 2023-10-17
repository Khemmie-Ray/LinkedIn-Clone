import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import './sass/App.scss'
import LogIn from "./pages/LogIn";
import Feed from "./pages/Feed";
import Layout from "./component/Layout";
import Work from "./pages/Work";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path="/login" element={<LogIn />} />
  <Route element={<Layout />}>
  <Route index element={<Feed />} />
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
