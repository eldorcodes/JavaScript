import './App.css';
//// STRING METHODS
function StringMethods() {
  // key words let, var, const
  // data types string, number, boolean, object, array, null, undefined
  let data; // undefined
  data = 'hello'
  console.log(data);
  // null
  let message = null;
  message = 200;
  console.log(message);
  // turnary operator 
  let isGraduated = false;
  let about = isGraduated ? 'He has already graduated' : 'He has not graduated yet';
  console.log(about);
  // ASSIGNMENT OPERATORS =, +=, -=, *=, /=
  let number = 10;
   number *= 5; // number = number + 5
   console.log(number);
   // Comparison operators == === !== != > < 
   let a = 12;
   let b = '12';
  // == double equal compares only value
  // === triple compares value and type
  // != compares only values
  // !== compares value and type
   if (a != b) {
    console.log('correct');
   } else {
    console.log('wrong');
   }

   // logical operators || && ?
    let online = true;
    let graduated = false;
    let text = '';

    if (text) {
      text = 'true'
    } else {
      text = 'false'
    }
    // statements
    // switch 
    let day;
    let weekDay = new Date().getDay()
    switch(weekDay){
      case 0:
        day = 'Sunday';
        break;
      case 3:
        day = 'Thursday';
        break;
      case 2:
          day = 'Tuesday';
          break;
      default:
        day = 'Saturday';
    }
    console.log(weekDay);
    // STRING METHODS -- 
    // "" '' ``
    let sentence = `Uzbekiston is country located in Uzbekiston. Uzbekiston`;
    // length
    let lengthOfSentence = sentence.length;
    // toUpperCase() // toLowerCase()
    // slice(start,end)
    let part = sentence.slice(0,19)
    // negative slice()
    let negativeSlice = sentence.slice(-46,-15);
    // substring(startr,end)
    let part1 = sentence.substring(0,11);
    // difference between substring and slice is -12 negative number as 0
    let part3 = sentence.substring(0,34);
    // indexOf()
    let index = sentence.indexOf('n');
    let partFromIndex = sentence.substring(sentence.indexOf('c'),41);
    // replace(parameter1, parameter2)
    let newSentence = sentence.replace(/uzbekiston/ig,'America');
    // replace method case sensitive
    // charAt() character at 
    let letter = sentence.charAt(0)
    // concat() + concatnate 
    let name = 'Alex';
    let action = 'studies';
    let place = 'At the university';
    let newSentence2 = name + ' ' + action + ' ' + place; // concatnate
    let newSentence3 = name.concat(' ',action,' ',place); // concat() method
    // trim() removes white space 
    let username = 'Alexa';
    let displayName = ' Alexa ';
    displayName.trim()
    let result = null;
    if (username === displayName) {
      result = 'Same person'
    } else {
      result = 'Not the same person'
    }
    // trimStart() method removes first whitespace
    let word = ' Hello World ';
    let trimmedWord = word.trimStart()
    // trimEnd() method removes last whitespace;
    let trimmedLastSpace = word.trimEnd()
    // padStart() adds new value to text
    let mainText = 'Hello World';
    let paddedText = mainText.padStart(10,'w');
    let paddedEndText = mainText.padEnd(5,' ') ;
    // [0] access to string property
    let character = mainText[0]
    // JSX
  return <h1>{character}</h1>
  //
}

export default StringMethods;
