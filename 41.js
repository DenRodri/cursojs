function* generateSequence() {
    this.i = true;
    let n1 = 0, n2 = 1, nextTerm;
    while(this.i==true){
        yield n1;
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return 3;
  }
  
  let generator = generateSequence();
  for(i=0;i<2;i++){
  setInterval(()=>{
    let number = generator.next();  
     console.log(number.value); 
  }, 1000);
}
  
  
 