import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"


function App() {

  const routes = createBrowserRouter([
    { path: '/', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
