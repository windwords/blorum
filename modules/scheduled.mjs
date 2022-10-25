import { default as process } from 'process';

var mysql, redis;

function log(level, message){
    process.send({
        "action": "log",
        "level": level,
        "info": message
    });
}

function beforeInit(message){
    switch (message.action) {
        case "init":
            mysql = message.mysql;
            redis = message.redis;
            process.send({
                "action": "init"
            });
            eventExecutor = afterInit;
            break;
    }
}

function afterInit(message){
    switch(message.action){

    }
}

var eventExecutor = beforeInit;
process.on('message', (message) => {
    eventExecutor(message);
});
