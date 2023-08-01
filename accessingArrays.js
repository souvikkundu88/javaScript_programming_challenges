let vals = [-5, 'JavaScript', 3.8];

console.log("Using loop variable as a list index");
for (let i of [0, 1, 2]) {
    console.log(vals[i]);
}

console.log("Directly accessing the elements");
for (let v of vals) { // string v is read only
    console.log(v);
}

let mix = ['a', 1, 2.5, 'i', 50, 6, 'm', 4.4, 6.7, 's', '@educative'];
console.log('List index using "length"');
for (let v = 0; v < mix.length; v++) {
    console.log(mix[v]);
}