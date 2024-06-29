import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import App from "../App";
  import {SignIn, SignUp ,Asosiy ,Buyurtmalar , Servise } from '@pages'
  import { Drawer } from "../components";
  const Index = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<SignIn/>}/>
            <Route path="drawer/*" element={<Drawer/>} >
                <Route index element={<Asosiy/>}/>
                <Route path="buyurtmalar" element={<Buyurtmalar/>}/>
                <Route path="servise" element={<Servise/>}/>
                </Route>
            <Route path="sign-up" element={<SignUp/>}/>
        </Route>
      )
    );
    return <RouterProvider router={router}/>;
  };
  
  export default Index;
  