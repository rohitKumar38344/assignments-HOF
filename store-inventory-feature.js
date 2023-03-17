/*
Question 3: Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript 
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should 
use the map higher-order function to create a new object with the converted prices in Rupees
 */

const inventory = {
  items: ["shirt", "pant", "shoe", "watch", "bottle"],
  pricesInUSD: [45, 120, 350, 80, 20],
};

const currencyConversion = function (inventory) {
  const anotherInventory = {};
  anotherInventory.items = inventory["items"];
  anotherInventory.pricesInRupees = inventory["pricesInUSD"].map(
    (el) => el * 80
  );
  return anotherInventory;
};

const anotherInventory = currencyConversion(inventory);
console.log(anotherInventory);
