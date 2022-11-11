const mongoose = require('mongoose');
const {Schema} = mongoose; //구조 분해 할당

//스키마를 기준으로 데이터를 DB에 넣기 전에 먼저 검사
const userSchema = new Schema({
    email:{
        type:String,
        required:true, //필수 요소
    },
    name:String,
    age:{
        type:Number,
        min: 18,
        max:50
    },

}, {
    timestamps: true //생성 시간을 기록
});

module.exports = mongoose.model('User', userSchema); //스키마 연결