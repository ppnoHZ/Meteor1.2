/**
 * Created by zhoudd on 2015/10/14.
 */
Router.route('/',{name:'classes',
    data: function () {
            return Classes.findOne({});
    },
    waitOn: function () {
        return Meteor.subscribe('allClasses','zhoudd');
    }
});