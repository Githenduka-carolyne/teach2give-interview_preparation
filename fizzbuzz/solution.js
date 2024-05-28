let num =0
for(num =1; num<=100; num++){
  if(num % 5=== 0 && num % 3 ===0){
      console.log(`${num} - FizzBuzz`);
  }
  if( num % 3 ===0){
      console.log(`${num}  - Fizz`)
  }
  if(num % 5 === 0){
      console.log(`${num} - Buzz`);
  }
  else{
      console.log(`${num}`)
  }

}