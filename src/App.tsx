import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"


function App() {

  const routes = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
