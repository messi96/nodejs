var Task = require('../model/emp-model')

function listAllTasks(req,res) {
    Task.getAllTask(function(err, task) {
            console.log('controller')
            // console.log(req.params)
            if(err)
                res.send(err)
                console.log(err)
            res.send(task);
        })
}

function listSymbol(req,res) {
    Task.getTaskById("WLTW",function(err, task) {
        console.log('listing')
        console.log(req.params)
        console.log(req.query.id)                                                           //$_GET[id]
        if(err)
            res.send(err)
            console.log(err)
        res.send(task);
    })
}

function countRows(req, res) {
    Task.countAll(function(err, task) {
        console.log('counter')
        // console.log(req.params)
        if(err)
            res.send(err)
            console.log(err)
        res.send(task)
    })
}


module.exports = {
    listAllTasks,
    listSymbol,
    countRows
}