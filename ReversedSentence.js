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
