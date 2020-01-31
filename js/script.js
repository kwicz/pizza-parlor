// Business Logic
function Pizza(size){
	this.size = size;
	this.toppings = [];
	this.price = 0;
}

// Determine base cost of pizza based on size
Pizza.prototype.baseCost = function(pizza) {
	if (pizza.size === "small") {
		pizza.price = 12;
	} else if (pizza.size === "medium") {
		pizza.price = 18;
	} else {
		pizza.price = 24;
	}
	console.log("pizzaCost: " + pizza.price);
	
}

// Push toppings into toppings array

// Determine price of pizza with toppings

// Output total pizza cost to the DOM
Pizza.prototype.showCost = function(pizza) {
	$("#results").html("$" + pizza.price + ".00");
}

// User Logic
$(document).ready(function() {
	$(".size").click(function() {
		event.preventDefault();
		var pizzaSize = event.target.id;
		var pizza = new Pizza(pizzaSize);
		pizza.baseCost(pizza);
		pizza.showCost(pizza);
		
	});


});