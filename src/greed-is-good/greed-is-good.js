function score( dice ) {
    var diceCount = [0,0,0,0,0,0];
    var threeDiceRoll = [1000,200,300,400,500,600];
    var singleDiceRoll = [100,0,0,0,50,0];
    dice.forEach(x => diceCount[x-1]++);

    return diceCount.reduce((result,x,index) => result + (x >= 3? threeDiceRoll[index] : 0) + singleDiceRoll[index]*(x % 3),0);
}


// function score(dice) {
//   const totalFace = face => {
//     let score = 0;
//     let threes = 0;
//     const totalCount = dice.filter(die => die === face).length;
//     switch (face) {
//       case 1: {
//         score = 100;
//         threes = 700;
//         break;
//       }
//       case 5: {
//         score = 50;
//         threes = 350;
//         break;
//       }
//       default: {
//         score = 0;
//         threes = face * 100;
//         break;
//       }
//     }
//
//     return totalCount * score + (totalCount >= 3 ? threes : 0);
//   };
//
//   let total = 0;
//   for (i = 1; i < 6; i++) {
//     total += totalFace(i);
//   }
//   return total;
// }
//
// module.exports = score;
