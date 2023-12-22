const {Router}= require('express');
const router=Router({strict:true});
const buddyService=require('../services/buddy')
router.get('/buddylist',buddyService.getAllBuddy);

router.post('/buddylist',buddyService.createBuddy);
module.exports=router;