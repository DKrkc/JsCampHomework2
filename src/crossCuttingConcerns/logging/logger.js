export class BaseLogger{
    log(data){
        console.log("default Logger: " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}

export class MonoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}