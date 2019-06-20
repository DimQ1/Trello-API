const express = require('express');

const router = express.Router();
const role = require('../helpers/role');
const authorize = require('../businessLayer/authorize');
const { usersController } = require('../controllers/index');

router.get('/', authorize.userRoleCheck(role.admin), usersController.getAll);
router.get('/:id', usersController.getById);
module.exports = router;
