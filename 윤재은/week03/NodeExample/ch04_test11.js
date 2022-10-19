const fs = require('fs');

const infile = fs.createReadStream('./output.txt', {flags:'r'});

infile.on('data', function(data){
    console.log(`읽어들인 데이터 : ${data}`);
});

infile.on('end', function(data){
    console.log('읽기 종료');
});