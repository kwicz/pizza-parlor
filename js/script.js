// Business Logic
function Pizza(){
	this.size = undefined;
	this.toppings = [];
	this.sizePrice = 0;
	this.toppingsPrice = 0;
	this.totalPrice = 0;
}

// Determine base cost of pizza based on size
Pizza.prototype.baseCost = function(pizza, pizzaSize) {
	pizza.size = pizzaSize;
	if (pizza.size === "small") {
		pizza.sizePrice = 12;
	} else if (pizza.size === "medium") {
		pizza.sizePrice = 18;
	} else {
		pizza.sizePrice = 24;
	}
	pizza.totalPrice = pizza.sizePrice + pizza.toppingsPrice;
	pizza.showCost(pizza);
}

// Show user which size was chosen
Pizza.prototype.displaySize = function(pizza) {
	size = pizza.size;
	$(".crustSizes").addClass("hidden");
	$("#your-" + size).removeClass("hidden");
	$(".toppings").removeClass("hidden");
}

// Remove pizza size from user list
Pizza.prototype.removeSize = function(pizza, size) {
	$(".crustSizes").removeClass("hidden");
	$("#your-" + size).addClass("hidden");
	$(".toppings").addClass("hidden");
	pizza.sizePrice = 0;
	pizza.showCost(pizza);
}

// Push toppings into pizza toppings array
Pizza.prototype.addTopping = function(pizza, topping) {
	var topping = topping;
	pizza.toppings.push(topping);
	pizza.toppingsPrice += 1;
	pizza.totalPrice += pizza.toppingsPrice;
	pizza.showCost(pizza);
}

// Show user which topping was chosen
Pizza.prototype.displayTopping = function(topping) {
	console.log("topping: " + topping);
	$("#" + topping).addClass("hidden");
	$("#your-toppings").append("<img src='img/" + topping + ".png' alt='" + topping + "'>");
}

// Output total pizza cost to the DOM
Pizza.prototype.showCost = function(pizza) {
	if (pizza.sizePrice = 0) {
		alert("Choose pizza size first!");
	} else {
		$("#results").html("$" + pizza.totalPrice + ".00");
		$("#order").removeClass("hidden");
	}
}

// User Logic
$(document).ready(function() {
	var pizza = new Pizza;

	// User selects pizza size
	$(".size").click(function() {
		var pizzaSize = event.target.id;
		pizza.baseCost(pizza, pizzaSize);
		pizza.displaySize(pizza);
	});

	// User selects pizza toppings
	$(".topping").click(function() {
		var topping = $(this).val();
		pizza.addTopping(pizza, topping);
		pizza.displayTopping(topping);
	});

	// User removes pizza sizes from order list
	$(".selected").click(function(){
		var size = $(this).val();
		pizza.removeSize(pizza, size);
	})

});