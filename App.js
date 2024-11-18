import Signup from "./SignUp/signup";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login/login";

function App() {
  const route = createBrowserRouter([
    {
      path: "/", element: <Signup />,
    },
    {
      path: "/login",element: <Login />,
    },
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;