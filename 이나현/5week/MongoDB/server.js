const mongoose = require('mongose');
require('dotenv').config({path:"variables.env"})

console.log(process.env.MONGODB_URL);

// mongoose.connect(MONGODB_URL,{useNewUrlParser : true},(err)=>{if(err){
//     console.log(err);
// }else{
//     console.log('connected to db scc')
// }}
// );
