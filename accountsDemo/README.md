##  主要对Meteor的账户系统进行学习
### 包：accounts-ui  主要包含登陆按钮的样式。
    accounts-ui-unstyled 一个不包含样式的登陆按钮，可以使用这包来定义登陆的UI
    accounts-password 是Meteor账户系统最基本的登陆方式，可以通过邮箱和用户名登陆，1.2版本中是
    根据 登陆输入的字符中是否包含@ 来区别是用邮箱和用户名的。
    如果不使用Meteor自带的可以通过 
    
    
    selector可以包含多个字段的信息。
    Meteor.loginWithPassword = function (selector, password, callback) {
        
    }