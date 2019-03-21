function theBeatlesPlay(musicians, instruments){
  var musiciansAndInstruments = []
<<<<<<< HEAD
  for (var i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " plays " + instruments[i]
=======
  for (i = 0; i < musicians.length; i++){
    var sentence = musicians[i] + " plays " instruments[i]
>>>>>>> 7c174e879e1f815a578abd91b5c5860cb11dcc03
    musiciansAndInstruments.push(sentence)
  }
  return musiciansAndInstruments
}

function johnLennonFacts(jLFacts){
  var i = 0
<<<<<<< HEAD
  while (jLFacts[i]){
=======
  while (jLFact[i]){
>>>>>>> 7c174e879e1f815a578abd91b5c5860cb11dcc03
    jLFacts[i] = jLFacts[i].concat("!!!")
    i++
  }
  return jLFacts

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
