(function(ns) {
  'use strict';

  ns.Lemur = function Lemur(name, dob) {
    if(typeof name === 'string'){
      ns.Animal.call(this, name, dob);
      this.species = 'Lemur';
    }
    else {
      throw new Error ('All animals deserve a name');
    }
  };

  ns.Lemur.prototype = Object.create(ns.Animal.prototype);
  ns.Lemur.prototype.constructor = ns.Lemur;


  ns.Lemur.prototype.procreate = function procreate() {
    return new ns.Lemur(randomName(), Date.now());
  };

  ns.Lemur.prototype.jump = function jump(fear1to10) {
    if( (!Number(fear1to10)) || (fear1to10 < 0) || (fear1to10 > 10)){
      throw new Error ('Please enter a number between 0 and 10');
    }
    return (fear1to10 * 3) + ' feet high';
  };

  ns.Lemur.prototype.toString = function toString() {
    return 'I am a Lemur';
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
