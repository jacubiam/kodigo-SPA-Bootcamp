import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"


function App() {

  const routes = createBrowserRouter([
    { path: '/', element: <LoginPage /> }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
