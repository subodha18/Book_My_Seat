import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginuser from './Components/use/Login';
import Login from './Components/First/Login'
import User from './Components/use/User'
import Owneri from './Components/Own/Owneri';
import Info from './Components/Owninfo/Info';
import Subus from './Components/Subus';
import Buses from './Components/Bus_Root/Buses';
import Seat from './Components/Bus_Root/Seat';
import Confirmation from './Components/Bus_Root/Conformation';
import OwnerLogin from "./Components/Own/OwnerLogin"
import Payment from './Components/Bus_Root/Payment';
import History from './Components/use/History';
const approuter=createBrowserRouter(
  [
    {
      path:'/',
      element:<Login />
    },
    {
      path:'/owner/register',
      element:<Owneri />
    },
    {
      path:'/owner/Login',
      element:<OwnerLogin />
    },
    {
      path:'/user/register',
      element:<User/>
    },
    {
      path:'/user/Login',
      element:<Loginuser/>
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
    },
    {
      path:'/payment',
      element:<Payment />
    },
    {
      path:'/history',
      element:<History />
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
