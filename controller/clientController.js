const Client = require('../schema/client');

exports.Clients = async(req, res) => {
    try {
        Client.find({}).then(function(clients){
            // console.log(clients);
            res.send(clients);
        })
    } catch (error) {
        res.send({"ok": false, "error": "failed to find client!"});   
    }
}

exports.AddClient = async(req,res) => {
    try {
        const {name, phone, email} = req.body;
        const ClientToAdd = new Client({
            name: name,
            phone: phone,
            mail: email
        })
    
        ClientToAdd.save().then(()=> {
            console.log("Client saved");
        })
        res.send({"ok":true});   
    } catch (error) {
        res.send({"ok": false, "error": "failed to add client!"});   
    }
}


