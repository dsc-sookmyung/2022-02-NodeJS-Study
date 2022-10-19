const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const moment = require('moment');


function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ');
}

const logger = new (winston.Logger)({
    transports: [
        new (winstonDaily)({
            name:'info-file',
            filename:'./log/server',
            datePattern:'_yyyy-MM-dd.log',
            colorize:false,
            maxsize: 50000000,
            maxfiles: 1000,
            level:'info',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize:true,
            level:'debug',
            showLevel:true,
            json:false,
            timestamp:timeStampFormat
        })
    ]
});

logger.debug('디버깅 메세지입니다.');
logger.error('에러 메세지입니다.');


