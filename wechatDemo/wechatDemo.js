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
            if (Meteor.isCordova) {
                console.log(JSON.stringify(cordova.plugins.Wechat));
                cordova.plugins.Wechat.isInstalled(function (installed) {

                    alert("Wechat installed: " + (installed ? "Yes" : "No"));
                    if (installed) {

                        cordova.plugins.Wechat.share('文本', cordova.plugins.Wechat.Scene.TIMELINE, function () {
                            alert('分享成功~');
                        }, function (reason) {
                            alert(reason);
                        });
                    }
                }, function (reason) {
                    alert("Failed: " + reason);
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
