import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './Components/First/Login';
import User from './Components/use/User'
import Owneri from './Components/Own/Owneri';
import Info from './Components/Owninfo/Info';
import Subus from './Components/subus';
import Buses from './Components/Bus_Root/Buses';
import Seat from './Components/Bus_Root/Seat';
import Confirmation from './Components/Bus_Root/Conformation';
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
    },
    {
      path:'/bus',
      element:<Buses />
    },
    {
      path:'/seat',
      element:<Seat />
    },
    {
      path:'/Conform',
      element:<Confirmation />
    }
    
  ])
function App() {
  
  return (
    <>
      <div>
      
        <RouterProvider router={approuter} />
        {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Buses />} />
        <Route path="/seat" element={<Seat />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter> */}
      </div>

    </>
  )
}

export default App
