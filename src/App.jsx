import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css'
import Login from './Components/First/Login';
import User from './Components/use/User'
import Owneri from './Components/Own/Owneri';
import Info from './Components/Owninfo/Info';
import Subus from './Components/subus';
const approuter=createBrowserRouter(
  [
    {
      path:'/',
      element:<Login />
    },
    {
      path:'/owner',
      element:<Owneri />
    },
    {
      path:'/user',
      element:<User />
    },
    {
      path:'/businfo',
      element:<Info />
    },
    {
      path:'/menu',
      element:<Subus />
    }
    
  ])
function App() {
  
  return (
    <>
    
      <div>
        <RouterProvider router={approuter} />
      </div>

    </>
  )
}

export default App
