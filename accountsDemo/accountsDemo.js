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

            /*var jwt = require('jwt-simple');
            var payload = { foo: 'bar' };
            var secret = 'xxx';

            var token = jwt.encode(payload, secret);

            var decoded = jwt.decode(token, secret);
            console.log(decoded); //=> { foo: 'bar' }*/
            //退出登陆。
            Meteor.logout(function (error) {
                if (error)
                    alert(error);
            });
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
}


if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
