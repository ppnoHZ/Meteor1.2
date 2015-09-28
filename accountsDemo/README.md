##  主要对Meteor的账户系统进行学习
### 包：accounts-ui  主要包含登陆按钮的样式。
    accounts-ui-unstyled 一个不包含样式的登陆按钮，可以使用这包来定义登陆的UI
    accounts-password 是Meteor账户系统最基本的登陆方式，可以通过邮箱和用户名登陆，1.2版本中是
    根据 登陆输入的字符中是否包含@ 来区别是用邮箱和用户名的。
    如果不使用Meteor自带的可以通过 
    
    
    selector如果是字符串，字符串中包含@符号就是按照email登陆，否则就是username登陆。
    可以传对象但是必须是 {username:1111},{email:W@123.com}。不能包含其他字段，否则将
    会报错。
    Meteor.loginWithPassword = function (selector, password, callback) {
        
    }
    
## Settings 配置文件
    可以使用*.json的文件，在启动的时候使用 --settings [filename] 来设置配置文件。
    配置文件中的内容以JSON的格式，包含引号。
    public 属性下的内容可以在客户端和服务端都可以访问。
    其他属性，只能在服务端里访问。