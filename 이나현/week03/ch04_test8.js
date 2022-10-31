/**
 * 파일을 직접 열고 닫으면서 읽거나 쓰기
 */
// 파일 시스템 모듈 호출
var fs = require('fs');

// 파일에 열기를 합니다..
fs.open('./output.txt', 'w', function(err, fd) {
    if (err) {
        // throw err;
        console.log('파일 오픈 시 에러 발생');
        conaole.dir(err);
        return;
    }

    var buf = new Buffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
        if (err) {
            // throw err;
            console.log('파일 쓰기 시 에러 발생');
            conaole.dir(err);
            return;
        }
        console.log('파일 쓰기 완료함.');
        fs.close(fd, function() {
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료함.');
        });
    });
});