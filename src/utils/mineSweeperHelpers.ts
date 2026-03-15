import { IRecords } from "../types/mineSweeper";
import { getSecureRandomInt } from "./randomInteger";

const createArray2D = (level: number) => {
  const tableData: IRecords[][] = [];
  for (let i = 0; i < level; i++) {
    const colData = Array(level)
      .fill(0)
      .map(() => {
        return { isBomb: false, bombCount: 0, isClicked: false };
      });
    tableData.push(colData);
  }
  return tableData;
};

const generateIndex = (level: number) => {
  return [getSecureRandomInt(level), getSecureRandomInt(level)];
};

const createBombIndexes = (level: number) => {
  const bombIndexes: number[][] = [];
  const counter = level == 7 ? 10 : level == 10 ? 20 : 5;
  for (let i = 0; i < counter; i++) {
    let newIndex = generateIndex(level);
    while (bombIndexes.includes(newIndex)) newIndex = generateIndex(level);
    bombIndexes.push(newIndex);
  }
  return bombIndexes;
};

const addBombsToTable = (
  tableData: IRecords[][],
  bombIndexes: number[][],
  level: number,
) => {
  bombIndexes.map((item) => {
    tableData[item[0]][item[1]].isBomb = true;
    // set bombCount for its side tables
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          (i === 0 && j === 0) ||
          item[0] + i < 0 ||
          item[1] + j < 0 ||
          item[0] + i > level - 1 ||
          item[1] + j > level - 1
        )
          continue;

        tableData[item[0] + i][item[1] + j].bombCount += 1;
      }
    }
  });
  return tableData;
};

export default function CreateTable(level: number) {
  const tableData = createArray2D(level);
  const bombIndexes = createBombIndexes(level);
  const finaleTable = addBombsToTable(tableData, bombIndexes, level);

  return { finaleTable };
}

// Check Wining
export const checkIsWin = (currentBoard: IRecords[][], level: number) => {
  let revealedCount = 0;
  for (let i = 0; i < level; i++) {
    for (let j = 0; j < level; j++) {
      if (!currentBoard[i][j].isBomb && currentBoard[i][j].isClicked) {
        revealedCount += 1;
      }
    }
  }
  const counter = level == 7 ? 10 : level == 10 ? 20 : 5;
  if (revealedCount >= level * level - counter) return true;
  return false;
};
