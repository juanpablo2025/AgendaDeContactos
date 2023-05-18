import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {


  const router = createBrowserRouter([

    {
      path: '/',
      element: <h1>inicio</h1>
    },
    {
      path: '/',
      element: <h1>inicio</h1>
    },
    {
      path: '/',
      element: <h1>inicio</h1>
    }
  ])


  return (


    <RouterProvider router={router} />
  )
}

export default App
