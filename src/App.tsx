import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { LoggedInPage } from "./pages/LoggedInPage"


function App() {

  const routes = createBrowserRouter([
    { path: '/', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/auth/home', element: <LoggedInPage /> }

  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
