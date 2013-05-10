var myCar = {

  name: "Chevy Camaro",

  drive: function () {
    console.log( "Vroom Vroom I am High up in the air" );
  },

  auto: function () {
    console.log( "this is only for the highway" );
  },
  manual: function () {
    console.log ("this is for the city -- trafic trafic")
  }

};

var urCar = Object.create( myCar );


console.log( yourCar.name );