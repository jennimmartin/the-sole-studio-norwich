import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  Landing,
  HomeLayout,
  Treatments,
  About,
  Contact,
  Legal,
  Error,
  // Blog,
  // BlogPost,
  Faq,
} from "./pages";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

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
        path: "Treatments",
        element: <Treatments />,
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
      // {
      //   path: "blog",
      //   element: <Blog />,
      // },
      // {
      //   path: "blog/:slug",
      //   element: <BlogPost />,
      // },
      {
        path: "faq",
        element: <Faq />,
      },
    ],
  },
]);

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};

export default App;
