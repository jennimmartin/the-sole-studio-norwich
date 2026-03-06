import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Landing,
  HomeLayout,
  Services,
  About,
  Contact,
  Legal,
  Error,
  Blog,
  BlogPost,
  Faq,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "legal",
        element: <Legal />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug", // ← Add this route
        element: <BlogPost />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
