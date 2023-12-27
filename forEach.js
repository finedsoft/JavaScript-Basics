const kolkataFlights = [
    { destination: 'Delhi', price: 10245  },
    { destination: 'Mumbai', price: 5487  },
    { destination: 'Chennai', price: 6584 },
    { destination: 'Delhi', price: 6435 },
    { destination: 'Mumbai', price: 8454 },
    { destination: 'Delhi', price: 9456 },
];

let total = 0
let DelhiFlights = []
let flightCountObject = {}
let lowestPrice = 0

kolkataFlights.forEach((flight) =>
{
   if(flight.destination == 'Mumbai')
   {
     DelhiFlights.push(flight)
    
        if(lowestPrice == 0)
        {
            lowestPrice = flight.price
        }
        else if(lowestPrice > flight.price)
        {
            lowestPrice = flight.price
        }
   }

   if(flightCountObject[flight.destination] == undefined)
   {
    flightCountObject[flight.destination] = 1
   }
   else{
    flightCountObject[flight.destination] += 1
   }

   

})

console.log(DelhiFlights)

console.log(flightCountObject)

console.log(lowestPrice)