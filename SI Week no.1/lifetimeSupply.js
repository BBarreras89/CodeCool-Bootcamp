function lifetimeSupply ( age , amountPerDay) {
   let maxAge = 90;
   let lifetimeSupply = (maxAge -age) * (amountPerDay * 365)
   console.log( 'You will need ' + lifetimeSupply + ' protein-shakes till you die sleeping at the age of ' + maxAge + ' . ')
   return lifetimeSupply;
}

let supply1 = lifetimeSupply(33 , 3)

let supply2 = lifetimeSupply(40 , 11)

let supply3 = lifetimeSupply(50 , 20)