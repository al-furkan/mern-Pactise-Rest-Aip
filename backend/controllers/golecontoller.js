const asyncHandler = require('express-async-handler');
const Gole = require('../model/golemodel');
const User = require('../model/userModel');


//@desc get goals
//@route GET/api/goals
//@access Private


const getGoale = asyncHandler(async (req, res)=>{
    const goals =await Gole.find({user: req.user.id})
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
        text:req.body.text,
        user:req.user.id
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
    
    
    const user = await User.findById(req.user.id)


    //Check for user
   
    if(!user){
       res.status(401)
       throw new Error('User not Found')
    }
    // Make sure the logged in user matches the gole User
    if(gole.user.toString()!== user.id){
        res.status(401)
        throw new Error('User not authorized')
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

    const user = await User.findById(req.user.id)


    //Check for user
   
    if(!user){
       res.status(401)
       throw new Error('User not Found')
    }
    // Make sure the logged in user matches the gole User
    if(gole.user.toString()!== user.id){
        res.status(401)
        throw new Error('User not authorized')
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