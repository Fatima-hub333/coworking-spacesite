// Why Block scooping matters
var price = 20;
var isSale = true;

if (isSale) {
  //discount on the price of product
  var price = 20 - 2;
  // do something
  console.log('sale price', price);
}

console.log('price', price)