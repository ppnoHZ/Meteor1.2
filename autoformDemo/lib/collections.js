/**
 * Created by ID on 15/9/28.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */

Books = new Mongo.Collection("books");

Books.attachSchema(Schemas.Books);

//Meteor.users.attachSchema(Schemas.User);