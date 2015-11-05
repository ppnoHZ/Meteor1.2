/**
 *  存储在本地的文件名称组成
 *
 *      [] - [数据库中文件的ID]  -[文件名称包含扩展名]
 *
 *      images-EeL8MwRk9b7em9HfC-rsc28x28.png
 *
 *
 *
 *
 */


if (Meteor.isClient) {
    Template.fileupload.events({
        'change #file': function (event, template) {
            var con = DDP.connect("http://192.168.3.104:3000");
            con.call('fileUpload', event.target.files[0], function () {
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



