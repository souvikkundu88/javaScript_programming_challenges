/*
Write a program to show the sum of each row of the matrix. The matrix must have two rows and three columns.

Sample Input
[[10,20,30],
  [40,50,60]]

Sample output
Matrix: [[10, 20, 30], [40, 50, 60]]
Sum of Row1: 60
Sum of Row2: 150

*/
let a = [
    [10, 20, 30],
    [40, 50, 60]
]; // Creating a matrix

let sumRow1 = a[0][0] + a[0][1] + a[0][2]; // Calculating sum of first row
let sumRow2 = a[1][0] + a[1][1] + a[1][2]; // Calculating sum of second row

console.log("Matrix:", a);
console.log("Sum of Row1: " + sumRow1);
console.log("Sum of Row2: " + sumRow2);