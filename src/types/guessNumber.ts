import { FormEvent } from "react";

export interface gameProps {
  inputRef: React.RefObject<HTMLInputElement>;
  message: string;
  minValue?: string;
  maxValue?: string;
  maxTryCount?: string;
  handleSubmit: (e: FormEvent) => void;
}

export interface settingProps {
  handleSubmit: (e: FormEvent) => void;
}
