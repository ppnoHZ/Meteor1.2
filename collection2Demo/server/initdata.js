/**
 * Created by zhoudd on 2015/10/14.
 */
if (Meteor.isServer) {
    console.log('on server');
    if (Classes.find().count() === 0) {
        console.log('create data.....');
        Classes.insert({'name': 'һ��', 'person': 'zhoudd'});
        Classes.insert({'name': '����', 'person': 'zhoudd'});
        Classes.insert({'name': '����', 'person': 'zdd'});
        Classes.insert({'name': '�İ�', 'person': 'zdd'});
        Classes.insert({'name': '���'});
    }
}