'use strict';

module.exports.generateRandomNumber = event => {
  const randomNumber = parseInt(Math.random()*100);
  console.log("Random number is:", randomNumber);
  return randomNumber;
};
