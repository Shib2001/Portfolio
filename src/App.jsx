import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Components/Layout/AppLayout";


import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Error from "./Pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <About/>,
      },
      {
        path: "skills",
        element: <Skills />,
      },

      {
        path: "projects",
        element: <Projects/>,
      },
      {
        path: "education",
        element: <Education/>,
      },

      {
        path: "contact",
        element: <Contact/>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
