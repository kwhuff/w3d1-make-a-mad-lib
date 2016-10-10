//Intentionally made global by leaving off 'var' from variable log
log = console.log.bind(console);

var defaultName = "Kyle";
function sayHello(name){
  if (name === undefined){
    console.log('Hello, ' + defaultName + "!");
  }
  else{
    console.log('Hello, ' + name + '!');
  }
}

//sayHello();
//sayHello('Donald Trump');

//console.log('hello');

var transportationName = "Camry";
var transportationType = "car";
var $cost = "too much";
var _green = true;
var transportationNumber1 = true;
var snake_case_variable_is_okay = true;
var camelCaseIsBest = true;

var thisIsAVariable= true;
let thisBeTrue = true;
const thisNeverChange = true;

function testVariables (){
  var thisIsNotAvailableOutside = true;

  console.log(thisIsAVariable);
}
if (true === true){
  let thisIsAVariableOutside = true;
}
//log(thisIsAVariableOutside);

const thisCannotChange = true;
//thisCannotChange = false;

//console.log(thisIsNotAvailableOutside);
var firstName = 'Kyle';
firstName = "Huff";

//var lastName;
//console.log(lastName);

var thisIsUndefined;
var thisIsNull = null;
var thisIsBoolean = true;
var thisIsNumber = 12.334895;
var thisIsAString = 'hello';
var thisIsExpression = (1 + 1);
//var thisIsInput = inputs.first_name;

var movieTitle = "O Brother Where Art Thou?";
var movieDirector = "Cohen Brothers";
var mainActor = "George Clooney";
var releaseYear = 2000;
var isMovie = true;
var movieGenre = "Comedy";
//console.log(movieTitle, movieDirector, mainActor, releaseYear,isMovie, movieGenre);

var verb = "ran";
var sentence = 'Flying by the tower, I ' + verb + ' to safety.';
console.log(sentence);

var verb = 1;
var sentence = 12 + verb + 12;
console.log(sentence);

var verb = "ran";
var sentence = `Flying by the tower, I ${verb} to
safety.`;
console.log(sentence);

var on = true;
var ternary = (on ? 'The light is on.' : "The light is off.");
console.log(ternary);
