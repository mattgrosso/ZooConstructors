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
    this.isDead = false;
  };

  ns.Animal.prototype.age = function age() {
    if(this.isDead){
      throw new Error('This is an ex-' + this.species);
    }
    return Math.floor(((((((Date.now() - this.birthDate.getTime())/1000)/60)/60)/24)/365.25));
  };

  ns.Animal.prototype.expire = function expire() {
    this.isDead = true;
  };

  window.ns = ns;
})(window.ns || {});
