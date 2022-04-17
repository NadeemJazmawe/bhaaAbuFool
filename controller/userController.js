const Users = require('../schema/user');


exports.Users = async(req, res) => {
    Users.find({}).then(function(users){
        res.send(users);
    })
}

exports.AddUser = async(req,res) => {
    // console.log(req.body);
    const {name, phone, email} = req.body;
    console.log({name:name, phone: phone, mail:email});

    const userToAdd = new Users({
        name: name,
        phone: phone,
        mail: email
    })

    userToAdd.save().then(()=> {
        console.log("user saved");
    })

    res.send({"ok":true});
}