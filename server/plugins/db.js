module.exports = app => {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://127.0.0.1:27017/word-list', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('数据库连接成功')
    })
}