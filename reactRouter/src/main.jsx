import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path : "/Contact",
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
