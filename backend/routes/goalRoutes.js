const express = require('express');
const { getGoale, setGoal, UpdateGoale, deleteGoale } = require('../controllers/golecontoller');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();






//get request

router.get('/',protect,getGoale);


// post requesr
router.post('/',protect,setGoal )

// update  request

router.put('/:id',protect, UpdateGoale)

// delete request

router.delete('/:id',protect,deleteGoale )





module.exports= router;