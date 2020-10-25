// Code your solutions in this file

function writeCards(name, birthday) {
  let array = []
  for (let i = 0; i < name.length; i++)
    array.push(`Thank you, ${name[i]}, for the wonderful ${birthday} gift!`)
  return array
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}