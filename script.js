// 1st ans

function converter(ana) {
  let vori = 0.0625;
  const conAnatoVori = ana * vori;
  return conAnatoVori;
}
console.log(converter(16));


//2nd ans
let singara = 7;
let samucha = 10;
let jilapi = 15;

function calculator (singara, samucha,jilapi) {
  let total = singara+samucha+jilapi;
  return total ;
}
console.log(calculator (singara*5, samucha*2,jilapi*3));



// 3rd ans
function totalPicnicBugdet(numOFpeople) {
   let cost_per_person;

   if (numOFpeople <= 100) {
       cost_per_person = 5000;
   } else if (numOFpeople >100 && numOFpeople <=200) {
       cost_per_person = 4000;  
   } 
   else if (numOFpeople >200 && numOFpeople <=300 ) {
       cost_per_person = 3000;  
   }
   const totalBudget = numOFpeople * cost_per_person;
   return totalBudget;
}
console.log(totalPicnicBugdet(100));


// 4th ans

function even_Odd(number) {
 const length = number.length;
 if (length % 2==0)  {
   result = 'Even';
 } else {
   result = 'Odd';
 }
 return result;
}
console.log(even_Odd("Alter"));   



// 5th ans

function findingBadData(array) {
  if (array < -0 ) {
    console.log("Bad Data");
  } 
  else if (array>0 ) {
    console.log("Good Data");  
  }
}
findingBadData(100);

// task: [ 1,2,5 ]




// 6th ans_1

const cities = [
   { name: 'City A', population: 1200000, coordinates: { lat: 34.0522, lon: -118.2437 } },
   { name: 'City B', population: 800000, coordinates: { lat: 40.7128, lon: -74.0060 } },
   { name: 'City C', population: 500000, coordinates: { lat: 41.8781, lon: -87.6298 } },
 
 ];
const population = cities.map(city => city.population);
const totalPopulation = population.reduce((accum, currentPopulation) => accum + currentPopulation, 0);
console.log('Total population:', totalPopulation);


// 6th ans_2

 let highestPopulationCity = cities[0];
 for (let i = 0; i < cities.length; i++);
 console.log(highestPopulationCity);



// 6th ans_3
const averagePopulation = totalPopulation / cities.length;
console.log(averagePopulation);

// the end

