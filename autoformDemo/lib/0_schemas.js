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


})