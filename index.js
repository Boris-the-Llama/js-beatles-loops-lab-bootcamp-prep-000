function theBeatlesPlay(music, instrument) {
  var plays = [];
  for (var i = 0; i < music.length; i++) {
    var str = music[i] + " plays " + instrument[i];
    plays.push(str);
  }
  return plays;
}

function johnLennonFacts(array){
   var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
   var newFacts = [];
   var i = 0;
   while (i < facts.length) {
     newFacts.push(facts[i] + "!!!")
    i++;
   }
   return newFacts;
 }