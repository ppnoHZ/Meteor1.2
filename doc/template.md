# Template Helpers
## private
	私有的模板helpers，只能在定义的模板中使用
	```javascript
	Template.myTemplate.helpers({
  		foo: function () {
    		return Session.get("foo");
  		}
	});
	```

## public
	公共模板可以在多个模板中使用。
	使用Template.registerHelper(name, function)来定义。
	```javascript
	UI.registerHelper('pluralize', function (n, thing) {
		if (n === 1) {
			return '1' + thing;
		} else {
			return n + '' + thing + 's';
		}
	});
	```
	client调用：
	```javascript
	{{pluralize votes "Vote"}}
	```
	votes 是数据库中的一个值，对应function参数n，“Vote”对应function的thing参数。
## 模板扩展
	在UI上使用参数：
	Helper：
	```javascript
	Template.myTemplate.helpers({
  		displayName: function (firstName, lastName, keyword) {
    		var prefix = keyword.hash.title ? keyword.hash.title + " " : "";
    		return prefix + firstName + " " + lastName;
  		}
	});
	```
	Call Client：
	```javascript
	{{displayName "John" "Doe" title="President"}}
	```
	对应关系：
	displayName： 对应functionName;
	"John":参数firstName;
	"Doe":argument lastName;
	title="President"(实际上是一个对象)：keyword,访问的时候keyword.hashtitle