// Decorator Pattern



// The constructor to decorate
function door() { 

  this.cost = function () { return 350; }; 
  this.color = function () { return wodden-brown; }; 

} 

// Decorator 1
function stopper(door ) { 

  var v = door.cost(); 
  door.cost = function() { 
    return v + 25; 
  }; 

} 

// Decorator 2
function knob( door ){

  var v = door.cost(); 
  door.cost = function(){
    return  v + 20;
  };

}
 
// Decorator 3
function Insurance( door ){

  var v = door.cost(); 
  door.cost = function(){
     return  v + 20;
  };

}

var mb = new Door(); 
stopper( mb ); 
knob( mb );
Insurance( mb );

// Outputs: door : 415
// Outputs: console.log( mb.cost() );

