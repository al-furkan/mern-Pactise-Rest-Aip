const express = require('express');
const { getGoale, setGoal, UpdateGoale, DeleteGoale } = require('../controllers/golecontoller');
const router = express.Router();

//get request

router.get('/',getGoale);


// post requesr
router.post('/',setGoal )

// update  request

router.put('/:id', UpdateGoale)

// delete request

router.delete('/:id',DeleteGoale )





module.exports= router;