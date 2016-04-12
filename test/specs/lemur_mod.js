(function() {
  'use strict';

  var assert = chai.assert;

  suite('Lemur', function () {

    test('can create lemurs', function () {
      var lemur = new window.ns.Lemur('papa', 'March 22, 1996');

      assert.ok(lemur, 'there is a lemur');
      assert.ok(lemur instanceof window.ns.Lemur, 'it was created by Lemur');
      assert.strictEqual(lemur.name, 'papa', 'lemur is named correctly');
      assert.strictEqual(lemur.birthDate.getTime(), (new Date('March 22, 1996')).getTime(), 'lemur was born on the correct day');
      assert.strictEqual(lemur.age(), 20, 'papa is 20 years old');

    });

    test('lemurs can procreate, jump and string', function () {

      var lemur = new window.ns.Lemur('papa', 'March 22, 1996');
      var lemur2 = lemur.procreate();
      console.log(lemur2);

      assert.ok(lemur2, 'lemurs can procreate');
      assert.ok(lemur2 instanceof window.ns.Lemur, 'life finds a way');
      assert.ok(lemur2.name, 'the new lemur has a name');
      assert.strictEqual(lemur2.age(), 0, 'lemur 2 was just born');
      assert.strictEqual(lemur2.jump(5), '15 feet high', 'jumping calibrated');
      assert.strictEqual(lemur2.toString(), 'I am a Lemur', 'you sure are');

    });


  });

})();
