// add solution here

function theBeatlesPlay(musicians, instruments) {
  var alpha = new Array();
  for( var i = 0; i < musicians.length - 1; i++) {
    alpha.push(musicians[i] + " plays " + instruments[i])
  }
  return alpha;
}