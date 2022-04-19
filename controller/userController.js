const Users = require('../schema/user');
const Listem = require('../schema/listem');

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


exports.Listem = async(req, res) => {
    Listem.find({"name": req.query.name }).then(function(listems){
        res.send(listems);
    })
}

exports.AddListem = async(req, res) => {
    const {name, text} = req.body;

    const ListemToAdd = new Listem({
        name: name,
        text: text
    })

    ListemToAdd.save().then(() => {
        console.log("listem Added!");
    })
    res.send({"ok":true});
}

exports.DeleteListem = async(req, res) => {
    Listem.findByIdAndDelete({_id: req.params.id}).then( () => {
        res.send({"ok": true});
    })
}