const express = require('express');
const { userValidation } = require('../../controllers');
const { userController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/** Get user list */
router.get(
    "/list",
    validate(userValidation.createUser),
    userController.createUser
);