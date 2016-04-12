(function() {
  'use strict';

  var assert = chai.assert;

  suite('Tiger', function () {

    test('can create tigers', function () {
      var tiger = new window.ns.Tiger('squeakers', 'April 1, 1996');

      assert.ok(tiger, 'there is a tiger');
      assert.ok(tiger instanceof window.ns.Tiger, 'it was created by Tiger');
      assert.strictEqual(tiger.name, 'squeakers', 'tiger is named correctly');
      assert.strictEqual(tiger.birthDate.getTime(), (new Date('April 1, 1996')).getTime(), 'tiger was born on the correct day');
      assert.strictEqual(tiger.age(), 20, 'papa is 20 years old');

    });

    test('tigers can procreate, run and string', function () {

      var tiger = new window.ns.Tiger('squeakers', 'April 1, 1996');
      var tiger2 = tiger.procreate();
      console.log(tiger2);

      assert.ok(tiger2, 'tigers can procreate');
      assert.ok(tiger2 instanceof window.ns.Tiger, 'life finds a way');
      assert.ok(tiger2.name, 'the new tiger has a name');
      assert.strictEqual(tiger2.age(), 0, 'tiger 2 was just born');
      assert.strictEqual(tiger2.run(5), '500 miles', 'running calibrated');
      assert.strictEqual(tiger2.toString(), 'I will eat you', 'Damn straight');

    });


  });

})();
