import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Store from "./Navigation/Store";
import Contact from "./Navigation/Contact";
import NavBar from "./Navigation/NavBar";
import OrderSummary from "./Components/OrderSummary";
import Products from "./Navigation/Products";
import FeaturedProducts from "./Components/FeaturedProducts";
import NewProducts from "./Components/NewProducts";
import Users from "./Navigation/Users";
import UserDetails from "./Components/UserDetails";
import Profile from "./Navigation/Profile";
import { ContextProvider } from "./Components/Authentication";
import Login from "./Components/Login";
import RequireAuth from "./Components/RequireAuth";
const LazyLoading = React.lazy(()=> import ("./Navigation/Home"));

const App = () => {
  return (
    <Router>
      <ContextProvider>
      <NavBar/>
    <Routes>
        <Route path="/" element={<React.Suspense fallback="Loading..."><LazyLoading/></React.Suspense>} />
        <Route path="/store" element={<Store/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h1>Page not found</h1>}/>
        <Route path="/store/order-summary" element={<OrderSummary/>}/>
        <Route path="/products" element={<Products/>}>
          <Route index element={<FeaturedProducts/>}/>
            <Route path="featured" element={<FeaturedProducts/>}/>
            <Route path="new" element={<NewProducts/>}/>
        </Route>
        <Route path="users" element={<Users/>}>
          

        {/* dynamic routes */}
        <Route path=":userId" element={<UserDetails/>}/>  

        </Route>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/login" element={<Login/>}/>  

    </Routes>
    </ContextProvider>
    </Router>
  )
}


export default App;
