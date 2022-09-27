

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...

    
    for(let i=1; i<200;  i++)
    {
        let fizz = 'fizz'
        let buzz = 'buzz'
        let bang = 'bang'
        let fezz = 'fezz'
        let bong = 'bong'
        
        let data = [];
        
       //Array methods
         if(i % 3 == 0) {data.push(fizz)}
         if(i % 5 == 0) {data.push(buzz)}
         if(i % 7 == 0) {data.push(bang)}
         if(i % 11 == 0) {(data = [bong]) // trying to remove everything from the array and all multiples of 11 will be just bong and nothing else.
        }
        if(i % 13 == 0 && (data.includes(buzz || bang ))) {data.splice(1, 0, fizz)} 
        else if  (data.includes(fizz)) {data.unshift(fezz)}


        if(i % 17 == 0) {data.reverse() }

        if (data.length == 0)
      
    
            {console.log(i)}
            else {console.log(data.join(''))}
        

        
    
    }
    

    




    
}

// Now we run the main function...
fizzbuzz();
;


