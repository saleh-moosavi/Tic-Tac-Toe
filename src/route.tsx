import { createBrowserRouter } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
]);
