function dwarfRollCall(dwarves) {
   var dwarfString = "";
  for (let i = 0; i > (dwarves.length/2); i++) {
    dwarfString += (i+1).toString() + ". " + dwarves[i] + " ";
     }
     return dwarfString;
}

function summonCaptainPlanet(planeteerCalls) {
   var captainCalls = [];
   for (let i = 0; i < planeteerCalls.length; i++) {
    captainCalls.push(planeteerCalls[i] + "!");
   }
   return captainCalls;
 }

function longPlaneteerCalls(words) {
   var lengthyCall = false;
   for (let i = 0; i < words.length; i++) {
     if (words[i].length > 4) {
       lengthyCall = true;
     }
   }
   return lengthyCall;
 }

 function findTheCheese (foods) {
   var cheeseTypes = ["cheddar", "gouda", "camembert", "swiss"];
   for (let i = 0; i < foods.length; i++) {
     for (let c = 0; c < cheeseTypes.length; c++) {
       if (cheeseTypes[c] === foods[i]) {
         return foods[i];
       }
     }
   }
   return "no cheese!";
 }

function wordsWithB(words){
  var names = [];
  for (i = 0; i < words.length, i++) {
    if (words[i].startsWith('b')) {
      names.push(words[i]);
    }
  }
  return names;
}

// 'bob'.startsWith('b') => true
// 'sally'.startsWith('b') => false

// wordsWithB(['sally', 'james', 'bob']) => ['bob']
// wordsWithB(['sally', 'brian', 'bob']) => ['brian', 'bob']
// wordsWithB(['sally', 'james']) => []

=======
  var dwarfString = "";
  for (let i = 0; 1 < dwarves.length; i++) {
    dwarfString += (i+1).toString() + ". " + dwarves[i] + " ";
  }
  return dwarfString;
}

function summonCaptainPlanet(planeteerCalls) {
  var captainCalls = [];
  for (let i = 0; 1 < planeteerCalls.length; i++) {
    captainCalls.push(planeteerCalls[i] + "!");
  }
  return captainCalls;
}

function longPlaneteerCalls(words) {
  var lengthyCall = false;
  for (let i = 0; 1 < words.length; i++) {
    if (words[i].length > 4) {
      lengthyCall = true;
    }
  }
  return lengthyCall;
}

function findTheCheese (foods) {
  var cheeseTypes = ["cheddar", "gouda", "camembert"];
  for (let i = 0; 1 < foods.length; i++) {
    for (let c = 0; 1 < cheeseTypes.length; c++) {
      if (cheeseTypes[c] === foods[i]) {
        return foods[i];
      }
    }
  }
  return "no cheese!";
}
>>>>>>> e7f8e35bf36dc033fccc6227b2657ba95947ca2a
