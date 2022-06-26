const User = require('../schema/user');

exports.checkCookies = async (req, res, next) => {
    try {
        const userLog = req.cookies.user;
        if(userLog){
            req.cookiesUserid = userLog.data;
            next();
        }else{
            res.send({"ok": false, "error": "cookies not found!"});
        }
    } catch (error) {
        console.log("error from cookies!");
        res.send({"ok": false, "error": "cookies not found!"});
    }
}

exports.checkCookiesAdmin = async (req, res, next) => {
    try {
        const userLog = req.cookiesUserid.type;
        if(userLog == "admin"){
            req.cookiesUserid = userLog.data;
            next();
        }
    } catch (error) {
        console.log("error from cookies!");
        res.send({"ok": false, "error": "cookies not found!"});
    }
}

exports.checkConnection = async (req, res) => {
    res.send({"ok": true});
}

exports.Login = async(req, res) => {
    const {id, pass} = req.body;

    const user =  await User.findOne({userid: id});
    if(user != null) {
        if(user.userpass != pass){
            res.send({"ok": false, "error": "wrong email or Password"})
        }else {
            res.cookie('user', {
                "data": {
                    "userid": user.userid,
                    'type': user.type
                }
            }, { maxAge: 900000, httpOnly: true });
            console.log(`user ${user.userid} is logged in.`);
            res.send({ "ok": true });
        }
    }else {
        res.send({ "ok": false, "error": "user not found!" });
      }
}

exports.addUser = async(req, res) => {
    try {
        console.log("add user");
        const {id, pass, type} = req.body;
        const UserToAdd = new User({
            userid: id,
            userpass: pass,
            type: type
        })
    
        UserToAdd.save().then(() => {
            console.log("user saved");
        })
        res.send({"ok":true});
    } catch (error) {
        res.send({"ok": false, "error": "failed to add user!"});   
    }
}
