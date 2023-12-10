import ReactDOM from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./router/router.tsx";
// Import our custom CSS
import "./assets/scss/styles.scss";

// Import all of Bootstrap's JS
import "bootstrap";

const router = createBrowserRouter(routes);

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById("root"),
);
