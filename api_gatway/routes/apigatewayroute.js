const express = require('express')
const gatewayController=require('../controllers/gatewayController')

const router=express.Router()

router.use('/user',gatewayController.userService)

module.exports=router;