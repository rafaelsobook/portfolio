import React from 'react'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home.jsx'
import NavBar from './pages/NavBar.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 not found</div>
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
