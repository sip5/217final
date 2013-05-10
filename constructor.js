function Laptop( company, Memory, OS, cost ) {

  this.company = company;
  this.Memory = Memory;
  this.OS = OS;
  this.cost = cost;

  this.toString = function () {
    return this.company + " will provide " + this.Memory + " memory with" + this.OS "Operating System in $" + this.cosr;
  };
}

// Usage:

// We can create new instances of the car
var lenovo = new Laptop( "Z260", "4GB", "Windows 8", 750 );
var macbookPro = new Laptop( "Mac Book Pro", "6GB", "iOS", 1299 );

// and then open our browser console to view the 
// output of the toString() method being called on 
// these objects
console.log( lenovo.toString() );
console.log( macbookPro.toString() );
