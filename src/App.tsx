import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { LoggedInPage } from "./pages/LoggedInPage"
import { RecoverPassword } from "./pages/RecoverPassword"


function App() {

  const routes = createBrowserRouter([
    { path: '/', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/auth/home', element: <LoggedInPage /> },
    { path: '/reset', element: <RecoverPassword /> }


  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
