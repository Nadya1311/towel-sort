
module.exports = function towelSort (matrix) {
  let arr = [];

  if(matrix===undefined){
    return [];
  }else{
    for (let i = 0; i < matrix.length; ++i) {
      (i % 2) ? arr = arr.concat(matrix[i].reverse()) : arr = arr.concat(matrix[i]);
    }
    return arr;
  }
}