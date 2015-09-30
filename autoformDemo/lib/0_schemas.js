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



Schemas = {};

Schemas.Books = new SimpleSchema(
    {
        title: {
            type: String,
            label: function () {
                //这里可以做判断，判断语言。
                return '标题'
            },
            max: 200
        },
        author: {
            type: String,
            label: "作者"
        },
        copies: {
            type: Number,
            label: "Number of copies",
            min: 0
        },
        lastCheckedOut: {
            type: Date,
            label: "Last date this book was checked out",
            optional: true
        },
        summary: {
            type: String,
            //label: "Brief summary",
            optional: true,
            max: 1000
        }
    }
);
Schemas.Books.labels({
    summary:'Brief'
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


/* 提示消息的占位符
[label] will be replaced with the field label
[min] will be replaced with the minimum allowed value (string length, number, or date)
[max] will be replaced with the maximum allowed value (string length, number, or date)
[minCount] will be replaced with the minimum array count
[maxCount] will be replaced with the maximum array count
[value] will be replaced with the value that was provided to save but was invalid (not available for all error types)
[type] will be replaced with the expected type; useful for the expectedConstructor error type
*/
SimpleSchema.messages({
    required:"[label] 不能为空！",
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
//var ssContext= Schemas.Books.namedContext('userForm');
//
//ssContext.validate(,);

