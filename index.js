const fs = require('fs');
const generatingSize = 100;

var alice_oz = fs.readFileSync('alice_oz.txt', 'utf-8');
var words = alice_oz.match(/\S+/g) || [];

var dictionary = {};

for(var i = 1; i < (words.length - 1); i++) {
  if(dictionary[`${words[i - 1]} ${words[i]}`]) {
    dictionary[`${words[i - 1]} ${words[i]}`].push(words[i + 1]);
  } else {
    dictionary[`${words[i - 1]} ${words[i]}`] = [words[i + 1]];
  }
}

var hasText = true;
var generatingArray = [];
var suffixes = Object.keys(dictionary);
var firstSuffix = suffixes[suffixes.length * Math.random() << 0];
var generatingArray = firstSuffix.match(/\S+/g);

while(hasText) {
  suffix = generatingArray.slice(-2).join(" ");
  preffixes = dictionary[suffix];
  if(preffixes && generatingArray.length < generatingSize) {
    prefix = preffixes[preffixes.length * Math.random() << 0]
    generatingArray.push(prefix);
  } else {
    hasText = false;
  }
}

console.log(generatingArray.join(' '));
