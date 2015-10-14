/**
 * Created by zhoudd on 2015/10/11.
 */

Classes  = new Mongo.Collection('classes');

Student  = new Mongo.Collection('student');

Classes.allow({
    insert: function () {
        return true;
    }
})