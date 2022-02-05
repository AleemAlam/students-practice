function horizontalMatrixSymmetry(mat, n) {
  n = mat.length;
  let flag = true;
  if (n % 2 === 1) {
    mat.splice(Math.floor(n / 2), 1);
  }
  let i = 0;
  let j = mat.length - 1;
  while (i < j) {
    if (mat[i] !== mat[j]) {
      flag = false;
    }
    i++;
    j--;
  }
  return flag;
}
function transposeMatrix(mat) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = i; j < mat[0].length; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }
  return mat;
}

function verticalMatrixSymmetry(mat, n) {
  n = mat.length;
  mat = transposeMatrix(mat.map((c) => c.split("")));
  mat = mat.map((c) => c.join(""));
  let flag = true;
  if (n % 2 === 1) {
    mat.splice(Math.floor(n / 2), 1);
  }
  let i = 0;
  let j = mat.length - 1;
  console.log(mat);
  while (i < j) {
    if (mat[i] !== mat[j]) {
      flag = false;
    }
    console.log(mat[i], i, j);
    // if (i == 4) {
    //   break;
    // }
    i++;
    j--;
  }
  //   console.log(mat);
  return flag;
}

function checkForSymmetry(t, matrix) {
  //write code here
  //console n,matrix and check the input response
  console.log("hori");
  let vt = verticalMatrixSymmetry(matrix);
  console.log("hori");
  let hz = horizontalMatrixSymmetry(matrix);
  if (hz === false && vt === false) {
    console.log("NO");
  } else if (hz === true && vt === true) {
    console.log("BOTH");
  } else if (hz === true && vt === false) {
    console.log("HORIZONTAL");
  } else {
    console.log("VERTICAL");
  }
}
checkForSymmetry(1, ["*.*.", ".*.*", "*.*.", ".*.*"]);
