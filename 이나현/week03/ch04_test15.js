/**
 * 로그 파일 남기기
 * 로그 수준 debug:0 > info:1 > notice:2 > warning:3 > error:4 > crit:5 > alert:6 > emerg:7
 */
var winston = require('winston'); // 로그 처리 모듈 호출
var winstonDaily = require('winston-daily-rotate-file'); // 로그 일별 처리 모듈 호출
var moment = require('moment'); // 시간 처리 모듈

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
    // ex) 2017-05-01 20:14:28.500 +0900
}

var logger = new (winston.Logger)({
    transports: [
        new (winstonDaily)({
            name : 'info-file',
            filename: './log/server_%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            colorize: false,
            maxSize: 5000000,
            maxFiles: 1000,
            level: 'info',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console) ({
            name: 'debug-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [
        new (winstonDaily)({
            name: 'exception-file',
            filename: './log/exception_%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            colorize: false,
            maxSize: 5000000,
            maxFiles: 1000,    
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});

logger.debug('디버깅 메시지입니다.');
logger.error('에러 메시지');