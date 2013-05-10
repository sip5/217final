// Types.js - Constructors used behind the scenes

// A constructor for defining new doors
function Door( options ) {

  // some defaults
  this.doors = options.doors || 1;
  this.state = options.state || "brand new";
  this.color = options.color || "wooden-brown";
  this.dimention = options.dimention || “7’*3’”

}


// FactoryExample.js

// Define a skeleton vehicle factory
function DoorFactory() {}

// Define the prototypes and utilities for this factory

// Our default FurnitureClass is door
DoorFactory.prototype.FurnitureClass = Door;

// Our Factory method for creating new Door instances
DoorFactory.prototype.createDoor = function ( options ) {

  if( options. FurnitureType === "Door" ){
    this.FurnitueClass = Door;
  }else{
    this. FurnitueClass = addons;
  }

  return new this.FurnitueClass( options );

};

// Create an instance of our factory that makes cars
var door = new DoorFactory();
var car = DoorFactory.createDoor( { 
            DoorType: "Small", 
            color: "wooden", 
            addon: “none” } );

// Test to confirm our car was created using the vehicleClass/prototype Car

// Outputs: true
console.log( door instanceof Door ); 

