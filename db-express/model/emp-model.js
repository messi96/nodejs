var sql = require('./db')

//Task object constructor
var Task = function(task){
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};

// Task.createTask = function createUser(newTask, result) {
//     sql.query("INSERT INTO data set ?", newTask, function (err, res) {
//
//         if(err) {
//             console.log("error: ", err);
//             result(err, null);
//         }
//         else{
//             console.log(res.insertId);
//             result(null, res.insertId);
//         }
//     });
// };

Task.countAll = function count(result) {
    sql.query("Select count(*) from data", function (err, res) {             //count of all rows
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Task.getTaskById = function parseSymbol(taskId, result) {
    sql.query("Select * from data where symbol = ? ", taskId, function (err, res) {             //WLTW kind symbols.. filtering for symbols
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};

Task.getAllTask = function getAllTask(result) {
    sql.query("Select * from data", function (err, res) {                                       //return all data in the sheet

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            // console.log('tasks : ', res);

            result(null, res);
        }
    });
};

// Task.updateById = function(id, task, result){
//     sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else{
//             result(null, res);
//         }
//     });
// };

// Task.remove = function(id, result){
//     sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
//
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else{
//
//             result(null, res);
//         }
//     });
// };

module.exports= Task;