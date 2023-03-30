import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components";
import { Dashboard, Login, Register } from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Header />}>
    <Route index element={<Dashboard />}/>
    <Route path="login" element={<Login />}/>
    <Route path="register" element={<Register />}/>
  </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <ToastContainer />
    </>
  );
}

export default App;

/*
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
    <Route index element={<Dashboard/>}/>
    </Route>
  )
)

function App() {
  return()
}

export default App
*/
