function prefill(n, v) {
  if(n===0 || n==='0'){return []}

  var regExp = /[a-zA-Z]/g;

  if(!parseInt(n) || regExp.test(n) ||n<0 || (Number(n)===n && n%1!==0)){
    throw new TypeError(`${n} is invalid`);
  }
  
  return Array(n).fill(v);
}