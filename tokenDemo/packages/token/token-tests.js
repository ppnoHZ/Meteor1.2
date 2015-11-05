// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
    var en = JWT.encode({name: 'zhoudd'}, "rsc");
    console.log(en);
    var de = JWT.decode(en, "rsc");

    test.equal({name: 'zhoudd'}, de);
});
