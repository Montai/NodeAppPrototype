const router = require('express').Router();
const OrderController = require('../controllers/OrderController');

// router.get('/orders', OrderService.allOrders);
router.get('/showAllOrders', OrderController.getAllOrders);
//viewing my todays orders
router.get('/:id/showTodaysOrder', OrderController.getTodaysOrder);

module.exports = router;
