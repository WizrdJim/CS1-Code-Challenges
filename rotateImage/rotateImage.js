// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const matrix = [[0,1,2],[3,4,5,],[6,7,8]];

const rotateMatrix =(matrix) => {
  let iCount = 3;
  let jCount = 0;
  const rotatedMatrix = [[0,0,0],[1,1,1],[2,2,2]];

  for (let i = 0; i < matrix.length;i++){
    iCount--;
    for (let j = 0; j < matrix.length; j++){
      rotatedMatrix[i][j] = matrix[iCount][jCount];
      jCount++;
    }
  }
  return rotatedMatrix;
}