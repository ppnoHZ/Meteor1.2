/**
 * Created by ID on 15/10/12.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */


Meteor.startup(function () {
    // code to run on server at startup
    Meteor.publish('images', function () {
        return Images.find();
    });

});
