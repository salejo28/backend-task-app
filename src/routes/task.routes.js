const { Router } = require('express');
const router = Router();

const ctr = require('../controllers/task.controller');

router.route('/')
    .post(ctr.createTask)
    .get(ctr.getTasks);

router.route('/:id')
    .put(ctr.putTasks)
    .delete(ctr.deleteTask)


module.exports = router;