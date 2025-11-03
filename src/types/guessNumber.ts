export interface IGameProps {
  min: number;
  max: number;
  remainingTries: number;
  guess: string;
  message: string;
  isGameOver: boolean;
  setGuess: (val: string) => void;
  handleGuess: (e: React.FormEvent<HTMLFormElement>) => void;
  resetGame: () => void;
}

export interface ISettingProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  message: string;
}
