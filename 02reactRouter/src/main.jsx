import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import NotFound from './Components/Notfound'
import User from './Components/User'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path: "",
        element:<Home/>
      },
      {
        path: "/About",
        element:<About/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"*",
        element:<NotFound/>
      },
      {
      path:"/User/:id",
      element:<User/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
