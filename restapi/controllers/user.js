const user = require('../models/user')

async function handleGetAllUsers(req, res){
    const allDbUsers = await user.find({});
    const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
    </ul>`;
    res.send(html);
}

async function handleGetUserById(req,res){
    const user = await user.findById(req.params.id); //getting id from request
    
    
    return res.json(user);
}
async function handlePatchUserById(req,res){
    await user.findByIdAndUpdate(req.params.id,{lastName:"Changed"});
    return res.json();
}
async function handleDeleteUserById(req,res){
    await user.findByIdAndDelete(req.params.id);
    return res.json()
}

module.experts = {
    handleGetAllUsers,
    handleGetUserById,
    handlePatchUserById,
    handleDeleteUserById
};