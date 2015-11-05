/**
 * Created by ID on 15/9/28.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */

Template.quickForMethod.helpers({
    schemaFrom: function () {
        return Schemas.PageSchema;
    }
});
Template.quickForMethod.events({
    'click #testSchema': function () {

        var result = Meteor.apply('quickMethod', null, {
            wait: true, function() {
                console.log('22222222');
                console.log(arguments);
            }
        });
        console.log('1111111111');
        console.log(result);


        /*obj = {author:'zdd123123',title: "zdd12312", author: "zdd12312", copies: 'dfd'};

         //isValid = Match.test(obj, Schemas.Books);

         //check(obj, Schemas.Books);

         //isValid = Schemas.Books.namedContext("userForm").validate(obj);

         // OR
         isValid = Schemas.Books.namedContext("userForm").validateOne(obj, "author");
         console.log('222222222222',isValid);

         // OR

         var context = Schemas.Books.namedContext("userForm");
         if (!context.isValid()) {
         console.log(context.invalidKeys());
         }*/

    }
})


