const express = require('express');

const app = express();

const cluster = require('cluster');
//for windows
cluster.schedulingPolicy = cluster.SCHED_RR;


function delay(duration){
    const startTime = Date.now();
    while(Date.now()- startTime < duration){
        //event loop is blocked...
    }
}

app.get('/',(req,res) =>{
    res.send(`Performance example: ${process.pid}`);
});


app.get('/timer',(req,res) =>{
    delay(9000);
    res.send(`Ding ding ding: ${process.pid}`)
});

if(cluster.isMaster){
    console.log('Master has been started');
    cluster.fork();
    cluster.fork();
}else{
    console.log('Worker process started');
    app.listen(3000);
  
}

