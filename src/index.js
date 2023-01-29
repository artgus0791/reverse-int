module.exports = function reverse (n) {
let str = String(Math.abs(n));
const reverse = str.split('').reverse().join('');
return +reverse;
}
