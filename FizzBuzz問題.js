//1から20まで、3の倍数の時Fizz、5の倍数の時Buzz、3と5両方の倍数の時FizzBuzz
for (var i = 0 ; i < 20 ; i++){
　　if(i%3 === 0)&&(i%5 === 0){
    　　console.log('FizzBuzz')
}
　　　else if(i%3 === 0){
   　 　console.log('Fizz')
}
　　　else if(i%5 === 0){
    　　console.log('Buzz')
}
