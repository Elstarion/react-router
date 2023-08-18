import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Contacts } from "./routes/contacts/Contacts";
import ContactProfile from "./routes/contacts/ContactProfile";
import Gallery from "./routes/gallery/Gallery";
import { Posts } from "./routes/posts/Posts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "posts",
          element: <Posts />,
        },
        {
          path: "gallery",
          element: <Gallery />,
        },
        {
          path: "contacts",
          children: [
            {
              index: true,
              element: <Contacts />,
            },
            {
              path: ":contactId",
              element: <ContactProfile />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: import.meta.env.DEV ? "/" : "/react-router/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
