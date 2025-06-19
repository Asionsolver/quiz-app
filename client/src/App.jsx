
import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./components/Home";
import { Quiz } from "./components/Quiz";
import Result from "./components/Result";

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
    element: <Quiz />
  },
  {
    path: '/result',
    element: <Result />
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
