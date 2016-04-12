(function(ns) {
  'use strict';

  ns.Tiger = function Tiger(name, dob) {
    ns.Animal.call(this, name, dob);
  };

  ns.Tiger.prototype = Object.create(ns.Animal.prototype);
  ns.Tiger.prototype.constructor = ns.Tiger;


  ns.Tiger.prototype.procreate = function procreate() {
    return new ns.Tiger(randomName(), Date.now());
  };

  ns.Tiger.prototype.run = function run(durationMinutes) {
    return (durationMinutes * 100) + " miles";
  };

  ns.Tiger.prototype.toString = function toString() {
    return 'I will eat you';
  };

  function randomName(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for( var i=0; i < 7; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  window.ns = ns;
})(window.ns || {});
