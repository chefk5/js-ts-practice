/*Write a JavaScript function that takes a string as input and returns an object that counts the number
 of each vowel (a, e, i, o, u) in the string. The object should have keys for each vowel and values
representing the count of that vowel in the string. Ignore case sensitivity (treat uppercase and lowercase vowels as the same).
For example, if the input string is "Hello World," the function should return the following object: */

// {
//     a: 0,
//     e: 1,
//     i: 0,
//     o: 2,
//     u: 0
//   }

let text = 'Hello world,';

function countVowels(text) {
  let lowerCaseText = text.toLowerCase();
  let counter = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

  for (const char of lowerCaseText) {
    if ('aeiou'.includes(char)) counter[char]++;
  }
  console.log(counter);
}

countVowels(text);
