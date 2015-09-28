/**
 * Created by ID on 15/9/28.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */

Meteor.methods({
    quickMethod: function (doc) {
        console.log(JSON.stringify(doc));
        check(doc,Schemas.Books);
    }
})