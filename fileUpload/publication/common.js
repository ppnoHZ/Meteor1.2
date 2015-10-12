/**
 * Created by ID on 15/10/12.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
Images = new FS.Collection("images", {
    stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});


Meteor.startup(function () {
    Images.deny({
        insert: function () {
            return false;
        },
        update: function () {
            return false;
        },
        remove: function () {
            return false;
        },
        download: function () {
            return false;
        }
    });
    Images.allow({
        insert: function () {
            return true;
        },
        update: function () {
            return true;
        },
        remove: function () {
            return true;
        },
        download: function () {
            return true;
        }
    });
});

