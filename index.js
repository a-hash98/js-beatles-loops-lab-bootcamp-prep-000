function theBeatlesPlay(musicians, instruments){
  var musiciansAndInstruments = []

  for (var i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " plays " + instruments[i]

    musiciansAndInstruments.push(sentence)
  }
  return musiciansAndInstruments
}


function johnLennonFacts(facts){
  var i = 0
  while (facts[i] < length(facts)){
    facts[i] = facts[i].concat("!!!")
    i = i + 1
  }
  console.log(facts)
  return facts
}

function iLoveTheBeatles(num){
  var beatles = []
  do {
    beatles.push("I love the Beatles!")
    num = num + 1
  }  while (num < 15)

  return beatles
}







// add solution here
