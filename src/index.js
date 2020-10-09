module.exports = function reverse (n) {
  let num = String(n)
  let temp = ''
  if (num[0] === '-') {
    return Number(num.substring(1).split('').reverse().join(''))
  }
  return Number(num.split('').reverse().join(''))
}
