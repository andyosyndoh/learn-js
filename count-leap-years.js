// function countLeapYears(date) {
//     const year = date.getFullYear();
//     let count = 0;
//     console.log(year);
//     for (let i = 0; i < year; i++) {
//         if (i%4 === 0){
//             count++
//         }
//     }
//     return count
// }

function countLeapYears(date) {
    const year = date.getFullYear();

    function countLeapYearsUpTo(year) {
      year -= 1;
      return Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
    }
  
    return countLeapYearsUpTo(year);
  }

console.log(countLeapYears(Date.now()))