module.exports = function reverse (n) {
  
  if (n < 0){n = n * (-1);}
  let num = n.toString();
  let numArr = num.split('').reverse().join('');
  let revers = parseFloat(numArr);
  
  console.log(revers); 
  return revers;
}
console.log(module.exports(-123));
