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
            Session.set('counter', Session.get('counter') + 1);
            console.log('2');
            if (Meteor.isCordova) {
                console.log('2');
                WeChat.share('文本', WeChat.Scene.session, function () {
                    console.log('分享成功~');
                }, function (reason) {
                    console.log(reason);
                });
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
