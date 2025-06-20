
import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./components/Home";
import { Quiz } from "./components/Quiz";
import Result from "./components/Result";
import { CheckUserExist } from "./helper/helper";

/**
 * @react_router
 */


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/quiz',
    element: <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path: '/result',
    element: <CheckUserExist><Result /></CheckUserExist>
  }
])

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App
