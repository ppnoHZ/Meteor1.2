// Write your package code here!

j = Npm.require('jwt-simple');
JWT = {};

JWT.encode = function (obj,secret) {
    var token = j.encode(obj, secret);
    console.log(token);
    return token;
}
JWT.decode = function (token,secret) {
    var decoded = j.decode(token, secret);
    console.log(decoded);
    return decoded;
}

/*
 var jwt = require('jwt-simple');
 var payload = {foo: 'bar'};
 var secret = 'xxx';

 // encode
 var token = jwt.encode(payload, secret);

 // decode
 var decoded = jwt.decode(token, secret);
 console.log(decoded); //=> { foo: 'bar' }
 */
