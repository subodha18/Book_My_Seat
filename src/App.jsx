// import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css'
import Login from './Components/First/Login';
import User from './Components/use/User'
import Owneri from './Components/Own/Owneri';
import Info from './Components/Owninfo/Info';
import Navba from './Components/Home/Navba';
import Footer from './Components/Foot/Footer';
import Apply_info from './Components/Apply/Apply_info';
import Addfe from './Components/MidShow/Addfe';
import Place from './Components/Midshows/Place';
// const approuter=createBrowserRouter(
//   [
//     {
//       path:'/',
//       element:<Login />
//     },
//     {
//       path:'/owner',
//       element:<Owneri />
//     },
//     {
//       path:'/user',
//       element:<User />
//     },
//     {
//       path:'/businfo',
//       element:<Info />
//     }
//   ])
function App() {
  
  return (
    <>
      <h4>OMM GANPATI BABA</h4>
      {/* <div>
        <RouterProvider router={approuter} />
      </div> */}
      
      {/* <Navba /> */}
      {/* <Apply_info /> */}
      {/* <Footer /> */}
      {/* <Addfe /> */}
      <Place />
    </>
  )
}

export default App
