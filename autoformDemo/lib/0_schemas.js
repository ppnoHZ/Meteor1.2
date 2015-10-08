/**
 * Created by ID on 15/9/28.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 *
 * 指定label的方法有两种：
 *
 *  1，在Schema中
 *      label: function () {
                    //这里可以做判断，判断语言。
                    return '标题'
                },
    2，
 *
 */

/*
 type: Match.Any,                                                                                                     // 15
 label: Match.Optional(Match.OneOf(String, Function)),                                                                // 16
 optional: Match.Optional(Match.OneOf(Boolean, Function)),                                                            // 17
 min: Match.Optional(Match.OneOf(Number, Date, Function)),                                                            // 18
 max: Match.Optional(Match.OneOf(Number, Date, Function)),                                                            // 19
 minCount: Match.Optional(Match.OneOf(Number, Function)),                                                             // 20
 maxCount: Match.Optional(Match.OneOf(Number, Function)),                                                             // 21
 allowedValues: Match.Optional(Match.OneOf([Match.Any], Function)),                                                   // 22
 decimal: Match.Optional(Boolean),                                                                                    // 23
 exclusiveMax: Match.Optional(Boolean),                                                                               // 24
 exclusiveMin: Match.Optional(Boolean),                                                                               // 25
 regEx: Match.Optional(Match.OneOf(RegExp, [RegExp])),                                                                // 26
 custom: Match.Optional(Function),                                                                                    // 27
 blackbox: Match.Optional(Boolean),                                                                                   // 28
 autoValue: Match.Optional(Function),                                                                                 // 29
 defaultValue: Match.Optional(Match.Any),                                                                             // 30
 trim: Match.Optional(Boolean)
 */

Schemas = {};

Schemas.Books = new SimpleSchema(
    {
        title: {
            type: String,
            label: function () {
                //这里可以做判断，判断语言。
                return '标题';
            },
            max: 200,
            custom: function () {
                if (Meteor.isClient && this.isSet) {
                    if (this.value == 'zdd') {
                        Schemas.Books.namedContext("createBooksForm").addInvalidKeys([{name: "title", type: "myErrorType"}]);
                    }

                }
            }
        },
        author: {
            type: String,
            label: "作者",
            custom: function () {
                if (Meteor.isClient && this.isSet) {
                    if (this.value == 'zdd') {
                        console.log('重复');
                        //Schemas.Books.namedContext("createBooksForm").addInvalidKeys([{name: "author", type: "myErrorType"}]);
                        ssContext.addInvalidKeys([{name: "author", type: "myErrorType"}]);


                        var ik = ssContext.invalidKeys();
                        ik = _.map(ik, function (o) {
                            return _.extend({message: ssContext.keyErrorMessage(o.name)}, o);
                        });

                        console.log(JSON.stringify(ik));
                        //判断是指定key是否验证通过
                        console.log(ssContext.keyIsInvalid('author'));
                        //获取指定key的错误消息。
                        console.log(ssContext.keyErrorMessage('author'));
                        //清除 content对象。所有的错误消息将被清除。
                        ssContext.resetValidation();


                    }

                }
            }
        }
        ,
        copies: {
            type: Number,
            label: "Number of copies",
            min: 0
        }
        ,
        lastCheckedOut: {
            type: Date,
            label: "Last date this book was checked out",
            optional: true
        }
        ,
        summary: {
            type: String,
            //label: "Brief summary",
            optional: true,
            max: 1000
        }
    }
);

//单独配置key的显示信息。
Schemas.Books.labels({
    summary: 'Brief'
})

//
Schemas.UserCountry = new SimpleSchema({
    name: {type: String},
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/   //正则表达式验证
    }
});
Schemas.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        optional: true
    },
    lastName: {
        type: String,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['男', '女'],   //可选值
        optional: true
    },
    organization: {
        type: String,
        optional: true
    },
    website: {
        type: String,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    country: {
        type: Schemas.UserCountry,   //-----------嵌套其他Schemas
        optional: true
    }

});
Schemas.User = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object      //------------ 对象类型:在autoform里显示为组合
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    }


});


/*
 * 提示消息的占位符
 [label] will be replaced with the field label
 [min] will be replaced with the minimum allowed value (string length, number, or date)
 [max] will be replaced with the maximum allowed value (string length, number, or date)
 [minCount] will be replaced with the minimum array count
 [maxCount] will be replaced with the maximum array count
 [value] will be replaced with the value that was provided to save but was invalid (not available for all error types)
 [type] will be replaced with the expected type; useful for the expectedConstructor error type
 */
SimpleSchema.messages({
    myErrorType: '[label]重复',
    required: "[label] 不能为空！",
    minString: "[label] must be at least [min] characters",
    maxString: "[label] cannot exceed [max] characters",
    minNumber: "[label] must be at least [min]",
    maxNumber: "[label] cannot exceed [max]",
    minDate: "[label] must be on or after [min]",
    maxDate: "[label] cannot be after [max]",
    badDate: "[label] is not a valid date",
    minCount: "You must specify at least [minCount] values",
    maxCount: "You cannot specify more than [maxCount] values",
    noDecimal: "[label] must be an integer",
    notAllowed: "[value] is not an allowed value",
    expectedString: "[label] must be a string",
    expectedNumber: "[label] must be a number",
    expectedBoolean: "[label] must be a boolean",
    expectedArray: "[label] must be an array",
    expectedObject: "[label] must be an object",
    expectedConstructor: "[label] must be a [type]",
    regEx: [
        {msg: "[label] failed regular expression validation"},
        {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
        {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
        {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
        {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
        {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
        {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
        {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
        {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
        {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
    ],
    keyNotInSchema: "[key] is not allowed by the schema"
});
var ssContext = Schemas.Books.namedContext('userForm');
//
//ssContext.validate(,);

