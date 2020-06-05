const taskController = {};

const pool = require('../database');

taskController.getTasks = async (req, res) => {
    const tasks = await pool.query('SELECT * FROM tasks');
    res.json(tasks)
}

taskController.createTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = {
        title,
        description
    }
    pool.query('INSERT INTO tasks set ?', [newTask], (error, results, fields) => {
        if (error) {
            console.log(error);
            return res.send('error');
        }
    })
    res.json({
        message : 'Create successfully'
    })
}  

taskController.putTasks = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const putTask = {
        title,
        description
    }
    await pool.query('UPDATE tasks set ? WHERE id = ?', [putTask, id]);
    res.json({
        message: 'Updated Successfully'
    });
}

taskController.deleteTask = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM tasks WHERE id = ?', [ id ]);
    res.json({
        message: 'Deleted Successfully'
    })
}

module.exports = taskController;