import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>Hello from react router</div>
  },
  {
    path:'/about',
    element: <div>About me here</div>
  },
  {
    path:'/blogs',
    element: <div>Blogs part here</div>
  },
  {
    path: '/app',
    Component: App
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
