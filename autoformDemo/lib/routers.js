/**
 * Created by ID on 15/9/28.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
Router.configure({
    layoutTemplate:'layout'
});
Router.route('/home', {name:'home'});

Router.route('/', function () {
    this.render('insertBookForm', {});
});
Router.route('/update', function () {
    var book = Books.findOne();
    this.render('updateBookForm', {
        data: book
    });
});

Router.route('/method', function () {
    var book = Books.findOne();
    this.render('quickForMethod', {
        data: book
    });
});

Router.route('/custom', function () {
    var book = Books.findOne();
    this.render('customForm', {
        data: book
    });
});

