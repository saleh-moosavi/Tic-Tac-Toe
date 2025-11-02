import { createBrowserRouter } from "react-router-dom";
import TicTacToe from "./pages/TicTacToe";
import Home from "./pages/Home";
import GuessNumber from "./pages/GuessNumber";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tic-tac-toe",
    element: <TicTacToe />,
  },
  {
    path: "/guess-number",
    element: <GuessNumber />,
  },
]);
