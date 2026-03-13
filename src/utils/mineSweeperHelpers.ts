import { IRecords } from "../types/mineSweeper";
import { getSecureRandomInt } from "./randomInteger";

const createArray2D = () => {
  const tableData: IRecords[][] = [];
  for (let i = 0; i < 5; i++) {
    const colData = Array(5)
      .fill(0)
      .map(() => {
        return { isBomb: false, bombCount: 0, isClicked: false };
      });
    tableData.push(colData);
  }
  return tableData;
};

const generateIndex = () => {
  return [getSecureRandomInt(5), getSecureRandomInt(5)];
};

const createBombIndexes = () => {
  const bombIndexes: number[][] = [];
  for (let i = 0; i < 5; i++) {
    let newIndex = generateIndex();
    while (bombIndexes.includes(newIndex)) newIndex = generateIndex();
    bombIndexes.push(newIndex);
  }
  return bombIndexes;
};

const addBombsToTable = (tableData: IRecords[][], bombIndexes: number[][]) => {
  bombIndexes.map((item) => {
    tableData[item[0]][item[1]].isBomb = true;
    // set bombCount for its side tables
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          (i === 0 && j === 0) ||
          item[0] + i < 0 ||
          item[1] + j < 0 ||
          item[0] + i > 4 ||
          item[1] + j > 4
        )
          continue;

        tableData[item[0] + i][item[1] + j].bombCount += 1;
      }
    }
  });
  return tableData;
};

export default function CreateTable() {
  const tableData = createArray2D();
  const bombIndexes = createBombIndexes();
  const finaleTable = addBombsToTable(tableData, bombIndexes);

  return { finaleTable };
}

// Check Wining
export const checkIsWin = (currentBoard: IRecords[][]) => {
  let revealedCount = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (!currentBoard[i][j].isBomb && currentBoard[i][j].isClicked) {
        revealedCount += 1;
      }
    }
  }
  if (revealedCount >= 20) return true;
  return false;
};
