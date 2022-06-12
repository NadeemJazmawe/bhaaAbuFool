const Client = require('../schema/client');

exports.Clients = async(req, res) => {
    Client.find({}).then(function(clients){
        res.send(clients);
    })
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


