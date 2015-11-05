if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);
    Template.hello.onRendered(function () {
        var db = DDP.connect("http://192.168.3.40:3001");
        images = db.subscribe('images', function () {

        });
    })
    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'change #upload': function (event, template) {
            var con = DDP.connect("http://192.168.3.104:3000");
            console.log(event.target.files[0]);
            con.call('fileUpload', 'test', event.target.files[0], function () {
                console.log(arguments);
            })
            //Meteor.call()

            /*FS.Utility.eachFile(event, function (file) {
             Images.insert(file, function (err, fileobj) {
             if (err) {
             } else {
             var userID = Meteor.userId();
             var imagesURL = {
             'profile.image': '/cfs/files/images/' + fileobj._id
             };
             Meteor.users.update(userID, {$set: imagesURL});
             }
             })
             })*/
        },
        'click input[type="submit"]': function () {
            //访问选择的图片
            var file = $('#file').get(0).files[0];
            console.log('Upload result: ', file);
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
