class obj {
  constructor(secret) {
    this.sec = secret;
  }
  
  getSecret(){
    return this.sec;
  }
  
  setSecret(val){
    this.sec = val;
  }
}

function createSecretHolder(secret) {
  var y = new obj(secret);
  return y;
}


