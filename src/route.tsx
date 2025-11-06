import App from "./App";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import GuessNumber from "./pages/GuessNumber";
import { createBrowserRouter } from "react-router-dom";
import RockPaperScissors from "./pages/RockPaperScissors";

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
      {
        path: "/rock-paper-scissors",
        element: <RockPaperScissors />,
      },
    ],
  },
]);
