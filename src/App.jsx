import React from 'react'
import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Content from './pages/Content.jsx'
import Home from './pages/Home.jsx'
import NavBar from './pages/NavBar.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <div>404 not found</div>
  },
  {
    path: '/grimland',
    element: <Content />
  },
  {
    path: '/dungeonborn',
    element: <Content />
  },
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
