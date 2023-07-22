const asyncHandler = require('express-async-handler');


//@desc get goals
//@route GET/api/goals
//@access Private


const getGoale = async (req, res)=>{
   
    res.status(200).json({
        message: " working get request",
    })
}



//@desc set goals
//@route POST/api/goals/
//@access Private


const setGoal =async (req, res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
       }
    res.status(200).json({
        message: " working post request",
    })
}



//@desc Update goals
//@route PUT/api/goals/:id
//@access Private


const UpdateGoale =async (req, res)=>{
   res.status(200).json({
        message: `workaing delete req ${req.params.id}`,
    })
}




//@desc delete goals
//@route DELETE/api/goals/:id
//@access Private



const DeleteGoale =async (req, res)=>{
    res.status(200).json({
        message: `workaing delete req ${req.params.id}`,
    })
}




module.exports = {
    getGoale,
    setGoal,
    UpdateGoale,
    DeleteGoale,
}