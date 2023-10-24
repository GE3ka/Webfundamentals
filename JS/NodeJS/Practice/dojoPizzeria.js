function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.protein = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni","sausage"]);
console.log(pizza1);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(pizza2);
