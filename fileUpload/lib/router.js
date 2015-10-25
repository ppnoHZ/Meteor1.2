/**
 * Created by ID on 15/10/12.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
Router.route('/',{
    waitOn: function () {
        return Meteor.subscribe('images');
    },
    action: function () {
        if (this.ready())
            this.render('fileupload');
    else
        this.render('fileupload');
    }
});