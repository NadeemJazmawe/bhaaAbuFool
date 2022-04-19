const User = require('../schema/user');

exports.CheckUser = async(req, res) => {
    const {id, pass} = req.body;

    const user =  await User.findOne({userid: id});
    if(user != null) {
        if(user.userpass != pass){
            res.send({"ok": false, "error": "wrong Password"})
        }else {
            res.cookie('user', user.userid, {maxAge: 36000});
            console.log("here");
            res.send({ "ok": true });
        }
    }else {
        res.send({ "ok": false, "error": "user not found!" });
      }
}

exports.addUser = async(req, res) => {
    const {id, pass} = req.body;

    const UserToAdd = new User({
        userid: id,
        userpass: pass
    })

    UserToAdd.save().then(() => {
        console.log("user saved");
    })

    res.send({"ok":true});
}