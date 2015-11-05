if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click button': function () {
            // increment the counter when button is clicked
            var token = JWT.encode({name: 'zhoudd'}, 'rsc');
            console.log(token);

            /*  var payload = { foo: 'bar' };
             var secret = 'xxx';

             // encode
             var token = jwt.encode(payload, secret);

             // decode
             var decoded = jwt.decode(token, secret);*/
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
