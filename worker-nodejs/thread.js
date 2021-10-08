const {isMainThread,
    workerData ,Worker} = require('worker_threads');
console.log(`Main Thread !Process Id : ${process.pid}`)
if (isMainThread){
new Worker(__filename,{
    workerData : [7,6,2,3]
});
new Worker(__filename,{
    workerData : [10,6,1,3]
});
}else{
    console.log(`Worker !Process Id : ${process.pid}`)
    console.log(`Worker sorting : ${workerData.sort()}`)
}