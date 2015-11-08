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
            let t = new test();
            t.show();
            Session.set('counter', Session.get('counter') + 1);
        }
    });
    // Template.hello.OnRender({
    //            // code to run on server at startup
    //     var letConst = new LetConst('let', 'hello ecmascript2015');
    //     letConst.toString();
    // });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
        var letConst = new LetConst('let', 'hello ecmascript2015');
        letConst.toString();
    });
}
class test {
    show() {
        console.log('test.show');
    }
}