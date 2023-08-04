"use strict"
const prompt = require("prompt-sync")({sigint: true});
let u = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let pflag = 1;
for (let a = 0; a < parseInt(u.length / 2); a++) {
    if (u[a] != u[u.length - (a + 1)]) {
        pflag = 0;
    }
}
let result = "";
if (pflag == 0) {
    result += "[" + u + "] is NOT a palindrome!";
} else {
    result += "[" + u + "] is a PALINDROME!";
}
console.log(result);

let v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
pflag = 1;
for (let a = 0; a < parseInt(v.length / 2); a++) {
    if (v[a] != v[v.length - (a + 1)]) {
        pflag = 0;
    }
}
result = "";
if (pflag == 0) {
    result += "[" + v + "] is NOT a palindrome!";
} else {
    result += "[" + v + "] is a PALINDROME!";
}
console.log(result);
