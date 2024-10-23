export const checkWinner = (allBlocks: any) => {
  let winner;
  if (
    allBlocks[0].id !== "" &&
    allBlocks[0].id == allBlocks[1].id &&
    allBlocks[1].id == allBlocks[2].id
  )
    winner = allBlocks[0].id;
  else if (
    allBlocks[3].id !== "" &&
    allBlocks[3].id === allBlocks[4].id &&
    allBlocks[3].id === allBlocks[5].id
  )
    winner = allBlocks[3].id;
  else if (
    allBlocks[6].id !== "" &&
    allBlocks[6].id === allBlocks[7].id &&
    allBlocks[6].id === allBlocks[8].id
  )
    winner = allBlocks[6].id;
  else if (
    allBlocks[0].id !== "" &&
    allBlocks[0].id === allBlocks[3].id &&
    allBlocks[0].id === allBlocks[6].id
  )
    winner = allBlocks[0].id;
  else if (
    allBlocks[1].id !== "" &&
    allBlocks[1].id === allBlocks[4].id &&
    allBlocks[1].id === allBlocks[7].id
  )
    winner = allBlocks[1].id;
  else if (
    allBlocks[2].id !== "" &&
    allBlocks[2].id === allBlocks[5].id &&
    allBlocks[2].id === allBlocks[8].id
  )
    winner = allBlocks[2].id;
  else if (
    allBlocks[0].id !== "" &&
    allBlocks[0].id === allBlocks[4].id &&
    allBlocks[0].id === allBlocks[8].id
  )
    winner = allBlocks[0].id;
  else if (
    allBlocks[2].id !== "" &&
    allBlocks[2].id === allBlocks[4].id &&
    allBlocks[2].id === allBlocks[6].id
  )
    winner = allBlocks[2].id;
  else if (
    allBlocks[0].id !== "" &&
    allBlocks[1].id !== "" &&
    allBlocks[2].id !== "" &&
    allBlocks[3].id !== "" &&
    allBlocks[4].id !== "" &&
    allBlocks[5].id !== "" &&
    allBlocks[6].id !== "" &&
    allBlocks[7].id !== "" &&
    allBlocks[8].id !== ""
  )
    winner = "No One";
  return winner;
};
