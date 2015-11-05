/**
 * Created by zhoudd on 2015/10/14.
 */
if (Meteor.isServer) {
    console.log('on server');
    if (Classes.find().count() === 0) {
        console.log('create data.....');
        Classes.insert({'name': '一班', 'person': 'zhoudd'});
        Classes.insert({'name': '二班', 'person': 'zhoudd'});
        Classes.insert({'name': '三班', 'person': 'zdd'});
        Classes.insert({'name': '四班', 'person': 'zdd'});
        Classes.insert({'name': '五班'});
    }
}