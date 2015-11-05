if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    /* counter: function () {
       return Session.get('counter');
     }*/
    counter() {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      console.log('onCreated');
      let v = 'log';
      let v1 = 'onCreated';
      console.log(`${v} ${v1}`);
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  Template.hello.onCreated = () => {
    
  }
};

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
