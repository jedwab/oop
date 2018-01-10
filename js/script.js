var iPhone6S = new Phone("Apple", 2250, "silver", 2015);
var SamsungGalaxyS6 = new Phone("Samsung", 2789, "black", 2014);
var OnePlusOne = new Phone("OnePlus", 1800, "white", 2018);

function Phone(brand, price, color, productionYear) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.productionYear = productionYear;
}
Phone.prototype.getWarrantyCost = function() {
        return this.price * 0.1;
    }
Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " , the price is " + this.price + " and was made in year " + this.productionYear +" and the cost of warranty is " + this.getWarrantyCost() + ".");
}

iPhone6S.printInfo ();
SamsungGalaxyS6.printInfo ();
OnePlusOne.printInfo ();
