(function(ns) {
  'use strict';

  ns.Animal = function Animal(name, dob) {
    if(!name){
      name = 'unnamed';
    }
    if(!dob){
      dob = Date.now();
    }
    this.name = name;
    this.birthDate = new Date(dob);
  };

  ns.Animal.prototype.age = function age() {
    return Math.floor(((((((Date.now() - this.birthDate.getTime())/1000)/60)/60)/24)/365.25));
  };

  window.ns = ns;
})(window.ns || {});
