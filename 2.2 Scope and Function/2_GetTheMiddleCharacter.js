function getMiddle(s)
{
  let len = s.length;
  
  if(len == 0){
    return;
  }
  
  if(len == 1){
    return s;
  }
  else if(len%2 == 0){
    return s.substring((len/2)-1,(len/2)+1);
  }
  else {
    return s.charAt((len-1)/2);
  }
}