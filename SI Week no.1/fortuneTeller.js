function tellFortune ( jobTitle, location, namePartner, childrenAmount ){
  console.log(' You will be a ' + jobTitle + ' in '+  location + ' and married to ' + namePartner + ' with ' + childrenAmount + ' children.')  
}


let test = tellFortune (' Softwaredeveloper' , ' Vienna' , 'Sophia Kratz' , 2)
let test2 = tellFortune( 'Devops' , 'Barcelona' , 'Sophia Kratz' , 3)
let test3 = tellFortune( 'DevSecOp' , 'Berlin' , 'Sophia Kratz' , 1)

