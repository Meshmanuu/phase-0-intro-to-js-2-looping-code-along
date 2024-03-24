// Code your solutions in this file
function writeCards(names, event) {
    let thankYouMessages = [];
    for (let name of names) {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }
    return thankYouMessages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = {
    writeCards,
    countDown
  };
  