// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
  var f = items.filter( function(e) { return !pred(e); } ); 
  var t = items.filter(pred); 
  items.length = 0; 
  for(var i = 0; i < f.length; i++) { 
    items.push(f[i]); 
  } 
  for(var i = 0; i < t.length; i++) { 
    items.push(t[i]); 
  }
  return f.length;
}