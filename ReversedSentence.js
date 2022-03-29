// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions/javascript

let str = 'Alles klar!'

function reverseWords(str) {
  let newString = ''
  // Go for it
  const arr = str.split(' ');
  const reversed = arr.map(el => {
    return el.split('').reverse().join('')
  })
  return reversed.join(" ")
  }

console.log(reverseWords(str))
