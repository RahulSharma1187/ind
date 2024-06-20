const express = require('express');
const router = express.Router();
const authcontrollers = require('../controlers/auth-controlers')

router.route('/').get(authcontrollers.home);
router.route('/availability').get(authcontrollers.availability);
router.route('/appointment').post(authcontrollers.appointment);
router.route('/bookacall').post(authcontrollers.bookacall);
router.route('/newsletter').post(authcontrollers.newsletter);

module.exports = router;