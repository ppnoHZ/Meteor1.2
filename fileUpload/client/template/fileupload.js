if (Meteor.isClient) {

    Template.fileupload.events({
        'change #file': function (event, template) {
            FS.Utility.eachFile(event, function (file) {
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
            })
        },
        'click input[type="submit"]': function () {
            //访问选择的图片
            var file = $('#file').get(0).files[0];
            console.log('Upload result: ', file);
        }
    });
}



