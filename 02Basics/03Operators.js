var SellingPrice = 299;
var ListPrice = 799;
var discount = ((ListPrice - SellingPrice)/ListPrice) * 100;

console.log("Discount Perecent is: " + discount + "% off");

displayDiscountPercent = Math.round(discount);

console.log("Discount Perecent is: " + displayDiscountPercent + "% off");

console.log(typeof discount);