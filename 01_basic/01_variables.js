//console.log("Number");
let bagPrice = 15599;
let trouserPrice = 2499;

let discountBagPrice = ((bagPrice - (10/100) * bagPrice) - 272);
console.log(discountBagPrice);

let discountTrouserPrice = ((trouserPrice - (41/100) * 2499) -29);
console.log(discountTrouserPrice);

let cartValue = ((discountBagPrice + discountTrouserPrice)+(25+20));
let finalValue = Math.round(cartValue);
console.log(finalValue);