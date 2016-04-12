(function() {
  'use strict';

  var assert = chai.assert;

  suite('Animal', function () {

    test('the namespace exists?', function () {
      assert.ok(window.ns, 'the namespace exists');
    });

    test('creates an animal correctly', function () {

      var animal = new window.ns.Animal('Bill', 'April 11 2013');

      assert.ok(animal, 'animal exists');
      assert.ok(animal instanceof window.ns.Animal, 'animal was made by Animal');
      assert.strictEqual(animal.name, 'Bill', 'animal is named Bill');
      assert.strictEqual(animal.birthDate.getTime(), (new Date('April 11 2013')).getTime(), 'animal was born on April 11 2013');
      assert.strictEqual(animal.age(), 3, 'animal is 3 years old');

    });

    test('handles empty date', function () {

      var animal = new window.ns.Animal();

      assert.ok(animal, 'animal exists');
      assert.ok(animal instanceof window.ns.Animal, 'animal was made by Animal');
      assert.strictEqual(animal.name, 'unnamed', 'animal is named unnamed');
      assert.strictEqual(animal.age(), 0, 'animal was just born');


    });
  }

  );

})();
