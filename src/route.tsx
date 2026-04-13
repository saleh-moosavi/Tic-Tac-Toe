import App from "./App";
import Home from "./pages/Home";
import GuessWord from "./pages/GuessWord";
import TicTacToe from "./pages/TicTacToe";
import MemoryGame from "./pages/MemoryGame";
import Calculator from "./pages/Calculator";
import GuessNumber from "./pages/GuessNumber";
import Minesweeper from "./pages/Minesweeper";
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
      {
        path: "/mine-sweeper",
        element: <Minesweeper />,
      },
      {
        path: "/memory-game",
        element: <MemoryGame />,
      },
      {
        path: "/guess-word",
        element: <GuessWord />,
      },
      // {
      //   path: "/password-generator",
      //   element: <Minesweeper />,
      // },
      // {
      //   path: "/unit-converter",
      //   element: <Minesweeper />,
      // },
      {
        path: "/calculator",
        element: <Calculator />,
      },
    ],
  },
]);
