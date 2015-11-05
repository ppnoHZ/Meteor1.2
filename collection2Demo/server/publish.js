/**
 * Created by zhoudd on 2015/10/14.
 */
Meteor.publish('allClasses', function (name) {
    return Classes.find({'person':name});
})