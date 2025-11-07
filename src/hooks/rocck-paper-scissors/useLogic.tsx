import { allOptions } from "../../constants";
import { ReactNode, useRef, useState } from "react";
import { getSecureRandomInt } from "../../utils/randomInteger";

export default function useLogic() {
  const [playerIcon, setPlayerIcon] = useState<ReactNode | null>(null);
  const [systemIcon, setSystemIcon] = useState<ReactNode | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [systemScore, setSystemScore] = useState(0);
  const [roundCount, setRoundCount] = useState(0);
  const [totalRounds, setTotalRounds] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const roundsInput = useRef<HTMLInputElement | null>(null);

  // Refs to hold instant score & round values
  const playerScoreRef = useRef(0);
  const systemScoreRef = useRef(0);
  const roundCountRef = useRef(0);

  const checkResult = (playerChoice: { icon: ReactNode; title: string }) => {
    if (!gameStarted || gameOver) return;

    const systemChoice = allOptions[getSecureRandomInt(3)];
    setPlayerIcon(playerChoice.icon);
    setSystemIcon(systemChoice.icon);

    if (playerChoice.title !== systemChoice.title) {
      const systemWins =
        (systemChoice.title === "Paper" && playerChoice.title === "Rock") ||
        (systemChoice.title === "Rock" && playerChoice.title === "Scissors") ||
        (systemChoice.title === "Scissors" && playerChoice.title === "Paper");

      if (systemWins) {
        systemScoreRef.current += 1;
        setSystemScore(systemScoreRef.current);
      } else {
        playerScoreRef.current += 1;
        setPlayerScore(playerScoreRef.current);
      }
    }

    roundCountRef.current += 1;
    setRoundCount(roundCountRef.current);

    if (roundCountRef.current >= totalRounds) {
      setGameOver(true);
      if (playerScoreRef.current > systemScoreRef.current)
        setWinner("Player Wins!");
      else if (playerScoreRef.current < systemScoreRef.current)
        setWinner("System Wins!");
      else setWinner("It's a Draw!");
    }
  };

  const startGame = () => {
    const roundsValue = Number(roundsInput.current?.value || 3);
    setTotalRounds(roundsValue);
    setGameStarted(true);
    resetGame();
  };

  const resetGame = () => {
    playerScoreRef.current = 0;
    systemScoreRef.current = 0;
    roundCountRef.current = 0;

    setPlayerIcon(null);
    setSystemIcon(null);
    setPlayerScore(0);
    setSystemScore(0);
    setRoundCount(0);
    setGameOver(false);
    setWinner(null);
  };
  return {
    playerIcon,
    setPlayerIcon,
    systemIcon,
    setSystemIcon,
    playerScore,
    setPlayerScore,
    systemScore,
    setSystemScore,
    roundCount,
    setRoundCount,
    totalRounds,
    setTotalRounds,
    gameOver,
    setGameOver,
    gameStarted,
    setGameStarted,
    winner,
    setWinner,
    checkResult,
    startGame,
    resetGame,
    roundsInput,
  };
}
