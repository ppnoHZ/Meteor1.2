/**
 * Created by ID on 15/9/28.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
Router.route('/', function () {
    this.render('insertBookForm', {
    });
});
Router.route('/update', function () {
    this.render('updateBookForm', {
    });
});