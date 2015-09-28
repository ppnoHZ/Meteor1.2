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
            alert(Meteor.settings.public.name);
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

/**
 *
 * @param myParam1
 * @param myParam2
 */
function loadDocs(myParam1, myParam2) {
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
