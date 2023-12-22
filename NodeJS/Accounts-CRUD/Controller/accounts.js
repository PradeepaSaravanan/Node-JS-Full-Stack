const {Router}= require('express');
const router=Router({strict:true});
const accountService=require('../services/account')
router.get('/accounts',accountService.getAllAccounts);
router.post('/accounts',accountService.createAccount);
router.put('/accounts/:id', accountService.updateAccount);
router.delete('/accounts/:id', accountService.deleteAccount);
router.get('/accounts/:id',accountService.getAccountById);


module.exports = router;

//const expres=require("express");
//const router=express.Router(); 