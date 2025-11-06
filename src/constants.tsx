import { FaHome } from "react-icons/fa";
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
