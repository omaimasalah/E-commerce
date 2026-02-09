
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home/Home";
import Banner from "./Home/Banner";
import Products from "./Home/Products";
import Shop from "./Shop";
import Blog from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";





const Layout = ()=>{
return(
  <>
  <Navbar />
  <Outlet /> 
  <Footer />
  </>
)
}
 
const App = () => {
const router =createBrowserRouter(createRoutesFromElements(
<Route>
   <Route element={<Layout />}> 

       <Route index element={<Home />} />
       <Route path="/Banner" element={<Banner />}/>
       <Route path="/Products" element={<Products />} />
       <Route path="/Shop" element={<Shop />} />
       <Route path="/Blog" element={<Blog />} />
       <Route path="/About" element={<About />}/>
       <Route path="/Contact" element={<Contact />}/>
       <Route path="/Cart" element={<Cart />}/>
   </Route>
</Route>
));

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App