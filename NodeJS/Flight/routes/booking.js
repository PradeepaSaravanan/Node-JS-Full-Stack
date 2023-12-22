const {Router}= require('express');
const router=Router({strict:true});
const bookingController= require('../controllers/booking.js')
router.get('/searchflights',bookingController.getFlightDetails);
router.post('/customer',bookingController.createCustomer);

module.exports=router;
