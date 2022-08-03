const winston = require('winston');
const winstonDaily = require('winston-daily-rotate-file');
const appRoot = require('app-root-path');
const process = require('process');
const { transport, ExceptionHandler } = require('winston');

const logDir = './logs';

const {
    combine,
    timestamp,
    label, 
    printf,
} = winston.format; //log file 기록할떄 사용할 format

const logFormat = printf(({ level, 
    message, 
    label, 
    timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

/*
* log level
* error: 0, warn:1, info:2, http: 3, verbose:4, debug:5, silly:6
*/

const logger = winston.createLogger({
    format:combine(
        label({
            label: "System Name"
        }),
        timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
        }),
        logFormat //log format 출력
    ),
        transport: [
            //info 레벨 결정
            new winstonDaily({
                level : 'info',
                datePattern: "YYYY-MM-DD",
                dirname: logDir,
                filename: '%DATE%-info.log',
                maxFiles: 30,
                zippedArchive: true,
            }),
            new winstonDaily({
                level : 'error',
                datePattern: "YYYY-MM-DD",
                dirname: logDir,
                filename: '%DATE%-error.log',
                maxFiles: 30,
                zippedArchive: true,
            })
        ], 
        exceptionHadlers: [ //uncaughtException 처리
            new ExceptionHandler({
                level: 'error',
                datePattern: "YYYY-MM-DD",
                dirname: logDir,
                filename: '%DATE%-exception.log',
                maxFiles: 30,
                zippedArchive: true,
            })
        ]
    });  

    // Production 환경이 아닌 경우 
    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(), //색깔 넣어서 출력
                winston.format.simple()
            )
        }));
    }

    module.exports = logger;

