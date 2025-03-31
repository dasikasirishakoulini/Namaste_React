import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestarauntMenu from "./components/RestarauntMenu";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"

const AppLayout = () => {
const[userName, setUserName] = useState();

useEffect(()=>{

  const data={
    name:"Sirisha Dasika"
  };
  setUserName(data.name);
},[])


  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName ,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
      path: "/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />
    },
    {path: "/Contact",
      element: <Contact />
    },
  {
    path: "/Cart",
    element: <Cart />
  },
{
  path: "/restaraunts/:resId",
  element: <RestarauntMenu/>
}],
    errorElement: <Error />
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
