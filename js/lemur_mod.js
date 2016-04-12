(function(ns) {
  'use strict';

  ns.Lemur = function Lemur(name, dob) {
    ns.Animal.call(this, name, dob);
  };

  ns.Lemur.prototype = Object.create(ns.Animal.prototype);
  ns.Lemur.prototype.constructor = ns.Lemur;


  ns.Lemur.prototype.procreate = function procreate() {
    return new ns.Lemur(randomName(), Date.now());
  };

  ns.Lemur.prototype.jump = function jump(fear1to10) {
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
