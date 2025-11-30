import {
  FaHandPaper,
  FaHandRock,
  FaHandScissors,
  FaHome,
} from "react-icons/fa";
import { LiaHandScissors } from "react-icons/lia";
import { TbNumbers, TbTicTac } from "react-icons/tb";

export const navLinks = [
  {
    id: 0,
    href: "/",
    icon: <FaHome />,
    title: "Home",
  },
  {
    id: 1,
    href: "/tic-tac-toe",
    icon: <TbTicTac />,
    title: "Tic-Tac-Toe",
  },
  {
    id: 2,
    href: "/guess-number",
    icon: <TbNumbers />,
    title: "Guess-The-Number",
  },
  {
    id: 2,
    href: "/rock-paper-scissors",
    icon: <LiaHandScissors />,
    title: "Rock-Paper-Scissors",
  },
];

export const allOptions = [
  { icon: <FaHandRock />, title: "Rock" },
  { icon: <FaHandPaper />, title: "Paper" },
  { icon: <FaHandScissors />, title: "Scissors" },
];

export const COLORS = [
  "#ff4d4f", // red
  "#ffa940", // orange
  "#ffd666", // yellow
  "#73d13d", // green
  "#36cfc9", // teal
  "#40a9ff", // blue
  "#9254de", // purple
  "#ff85c0", // pink
  "#ffffff", // white
];
