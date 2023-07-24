const asyncHandler = require('express-async-handler');
const Gole = require('../model/golemodel');



//@desc get goals
//@route GET/api/goals
//@access Private


const getGoale = asyncHandler(async (req, res)=>{
    const goals =await Gole.find()
    res.status(200).json(goals)
})



//@desc set goals
//@route POST/api/goals/
//@access Private


const setGoal = asyncHandler(async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
       }
      const gole = await Gole.create({
        text:req.body.text
      })

    res.status(200).json(gole)
})



//@desc Update goals
//@route PUT/api/goals/:id
//@access Private


const UpdateGoale = asyncHandler(async (req, res)=>{
       
    const gole =await Gole.findById(req.params.id)

    if(!gole){
        res.status(400)
        throw new Error('gole not Found');
    }

   const  updateGole = await Gole.findByIdAndUpdate(req.params.id, req.body,{
    new:  true,
   })
   
   res.status(200).json(updateGole);
})




//@desc delete goals
//@route DELETE/api/goals/:id
//@access Private



const deleteGoale =asyncHandler(async (req, res)=>{
    const gole = await Gole.findById(req.params.id)

    if(!gole){
        res.status(400)
        throw new Error('gole not Found');
    }

    await gole.remove();

   res.status(200).json({id: req.params.id})
})




module.exports = {
    getGoale,
    setGoal,
    UpdateGoale,
    deleteGoale,
}