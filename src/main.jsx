import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Mobiles from './Components/Mobiles.jsx';
import Laptops from './Components/Laptops.jsx';
import Users from './Components/Users.jsx';
import Users2 from './Components/Users2.jsx';
import UserDetails from './Components/UserDetails.jsx';
import { useParams } from 'react-router';

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users');
((res) => res.json());


const router = createBrowserRouter([
  {
    path:"/",
    Component: Root,
    children:[
      {index: true, Component: Home},
      {path: 'mobiles', Component: Mobiles},
      {path: 'laptops', Component: Laptops},
      {path:'users' ,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users},
        {
          path:'users2',
          element:<Suspense fallback={<span>Loading....</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        },
        {
          path: 'users/:userId',
          loader:({Params}) => fetch('https://jsonplaceholder.typicode.com/users'),
          Component: UserDetails
        }
      -

    ]
  },
  {
    path:'about',
    element: <div>About me here</div>
  },
  {
    path:'blogs',
    element: <div>Blogs part here</div>
  },
  {
    path: 'app',
    Component: App
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
