const express = require('express');
const {handleGetAllUsers, handleGetUserById,handlePatchUserById,handleDeleteUserById} = require('../controllers/user');
const router = express.Router();

router.use(express.urlencoded({extended:false}));
router.get("/user",handleGetAllUsers)
router.route('/api/users')
.get(async(req,res)=>{
    const allDbUsers = await user.find({});
    return res.json(allDbUsers);
}).post(async(req,res)=>{

    const body = req.body;
    // if(
    //     !body ||
    //     !body.first_name ||
    //     !body.last_name ||
    //     !body.email ||
    //     !body.gender ||
    //     !body.job_title
    // ){
        
    // }
    const result = await user.create({
        firstName : body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });
    return res.status(201).json({msg:"success"});

    // const newUser = {...body, id: users.length+1}
    // users.push(newUser);
    // fs.writeFile('./MOCk_DATA.json', JSON.stringify(users),(err,data)=>{
        
    //     return res.json(newUser)
    // })
})

router.route('/api/users/:id')
.get(handleGetUserById)
.put((req,res)=>{
    // const id = Number(req.params.id);
    // const userIdx = users.findIndex((user)=> user.id === id);
    // users[userIdx] = {...users[userIdx], ...req.body};
    
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),()=>{})
    // return res.json(users[userIdx])
})
.delete(handleDeleteUserById)
.patch(handlePatchUserById)

module.exports = router;