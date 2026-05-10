import { useState } from "react";

const rawOption = [
  {
    title: "UpperCase (ABC)",
    isCheked: false,
    key: "uppercase",
  },
  {
    title: "Numbers (123)",
    isCheked: false,
    key: "numbers",
  },
  {
    title: "Symbols (!@#)",
    isCheked: false,
    key: "symbols",
  },
];

export default function usePasswordGenerator() {
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [inputValue, setInputValue] = useState(8);
  const [options, setOptions] = useState(rawOption);
  const [password, setPassword] = useState("- - - - - - - -");

  const characters: Record<string, string> = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:',.<>?/`~",
  };

  const handleOptionChanges = (index: number) => {
    const prevOptions = [...options];
    prevOptions[index].isCheked = !prevOptions[index].isCheked;
    setOptions(prevOptions);
  };

  const getRandomChar = (type: string): string => {
    const chars = characters[type];
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const generatePassword = () => {
    const selectedOptions = options.filter((opt) => opt.isCheked);
    const allSelectedKeys = [
      "lowercase",
      ...selectedOptions.map((opt) => opt.key),
    ];

    const length = inputValue;
    if (length < 4 || length > 64) {
      setError("Password Must Be Between 4 to 64");
      return;
    }

    setError("");
    const passwordArray: string[] = [];

    passwordArray.push(getRandomChar("lowercase"));

    selectedOptions.forEach((option) => {
      passwordArray.push(getRandomChar(option.key));
    });

    while (passwordArray.length < length) {
      const randomKey =
        allSelectedKeys[Math.floor(Math.random() * allSelectedKeys.length)];
      passwordArray.push(getRandomChar(randomKey));
    }

    for (let i = passwordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passwordArray[i], passwordArray[j]] = [
        passwordArray[j],
        passwordArray[i],
      ];
    }

    setPassword(passwordArray.join(""));
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (password && password !== "- - - - - - - -") {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return {
    error,
    copied,
    options,
    password,
    inputValue,
    setInputValue,
    copyToClipboard,
    generatePassword,
    handleOptionChanges,
  };
}
