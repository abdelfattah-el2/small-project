import { useDispatch, useSelector } from "react-redux";
import RootLayout from "./components/Root/RootLayout";
import Basket from "./components/basket/Basket-index";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/HomeIndex";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
         <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <h1 className=" text-center text-3xl font-medium mt-2 py-4">
        A Practical Application with Redux
      </h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
