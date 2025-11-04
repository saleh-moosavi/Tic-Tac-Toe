import App from "./App";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import GuessNumber from "./pages/GuessNumber";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
    ],
  },
]);
