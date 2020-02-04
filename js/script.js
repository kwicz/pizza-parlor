// Business Logic
function Pizza() {
	this.size = undefined;
	this.toppings = [];
	this.sauce = undefined;
	this.sizePrice = 0;
	this.toppingsPrice = 0;
	this.totalPrice = 0;
}

// Determine base cost of user's pizza based on size
Pizza.prototype.addSize = function(size) {
	this.size = size;
	if (this.size === "small") {
		this.sizePrice = 12;
	} else if (this.size === "medium") {
		this.sizePrice = 18;
	} else {
		this.sizePrice = 24;
	}
	this.calculateTotal();
}

// Remove pizza crust from user's order
Pizza.prototype.removeSize = function(size) {
	this.sizePrice = 0;
	this.calculateTotal();
}

// Add sauce to user's pizza
Pizza.prototype.addSauce = function(sauce) {
	this.sauce = sauce;
}

// Remove sauce from user's pizza
Pizza.prototype.removeSauce = function(sauce) {
	this.sauce = undefined;
}

// Push toppings into pizza toppings array
Pizza.prototype.addTopping = function(topping) {
	this.toppings.push(topping);
	this.toppingsPrice++;
	this.calculateTotal();
}

// Remove toppings from pizza toppings array and adjust cost
Pizza.prototype.removeTopping = function(topping) {
	for(i = 0; i < this.toppings.length; i++){
		if (this.toppings[i] === topping) {
			this.toppings.splice(i,1);
		}
	};
	this.toppingsPrice--;
	this.calculateTotal();
}

// Calculate total pizza cost
Pizza.prototype.calculateTotal = function() {
	this.totalPrice = this.sizePrice + this.toppingsPrice;
	this.showCost();
}

// User Logic
$(document).ready(function() {
	
	// Preheat the oven
	var pizza = new Pizza;

	// User selects crust size
	$(".size").click(function() {
		var size = event.target.id;
		$(".crustSizes").addClass("hidden");
		$("#your-" + size).removeClass("hidden");
		$(".sauces").removeClass("hidden");
		pizza.addSize(size);
	});

	// User removes crust size
	$(".selected").click(function() {
		var size = $(this).val();
		$("#your-" + size).addClass("hidden");
		$(".crustSizes").removeClass("hidden");
		$(".sauces").addClass("hidden");
		$(".toppings").addClass("hidden");
		pizza.removeSize(size);
	});

  // User selects sauce
	$(".sauce").click(function() {
		if (pizza.sauce) {
			$(".your-" + pizza.sauce).addClass("hidden");
		}
		var sauce = event.target.id;
		$("#your-sauce").append("<button class='your-" + sauce + " " + sauce + "' id='" + sauce + "'>" + sauce + "</button>");
		$(".sauces").addClass("hidden");
		$(".toppings").removeClass("hidden");
		pizza.addSauce(sauce);
	});

	// User removes sauce
	$("#your-sauce").on("click", function() {
		var sauce = event.target.id;
		$(".your-" + sauce).addClass("hidden");
		$(".toppings").addClass("hidden");
		$(".sauces").removeClass("hidden");
		pizza.removeSauce(sauce);
	});

	// User selects pizza toppings
	$(".topping").click(function() {
		var topping = $(this).val();
		$("#" + topping).addClass("hidden");
		$("#your-toppings").append("<img src='img/" + topping + ".png' alt='" + topping + "' id='" + topping + "'>");
		pizza.addTopping(topping);
	});

	// User removes pizza toppings
	$("#your-toppings").on("click", function() {
		var topping = event.target.id;
		$("img#" + topping).addClass("hidden");
		$("#" + topping).removeClass("hidden");
		pizza.removeTopping(topping);
	});

	// Show cost of pizza
	Pizza.prototype.showCost = function() {
		$("#results").html("$" + this.totalPrice + ".00");
		$(".modal-button").removeClass("hidden");
	}

});