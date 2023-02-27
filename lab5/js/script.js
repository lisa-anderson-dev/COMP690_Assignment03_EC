let miles;
let gallons;
let mpg;
let again = 'y';
let valid;

do {
   miles = parseFloat(prompt('Enter miles driven'));
   gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
   if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
      mpg = miles / gallons;
      console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
   } else {
      alert('One or both entries are invalid.');
   }
   do {
      again = prompt('Run application again? (y or n)', 'y');
      valid = again === 'y' || again === 'n';
      if (!valid) {
         alert('You must enter either y or n - please try again.');
      }
   } while (!valid);
} while (again === 'y');
console.log('Application has exited.');