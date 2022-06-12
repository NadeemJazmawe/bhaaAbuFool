const Listem = require('../schema/listem');

exports.Listem = async(req, res) => {
    Listem.find({"name": req.cookiesUserid.userid }).then(function(listems){
        res.send(listems);
    })
}

exports.AddListem = async(req, res) => {
    try {
        const {name, text} = req.body;

        const ListemToAdd = new Listem({
            name: name,
            text: text
        })

        ListemToAdd.save().then(() => {
            console.log("listem Added!");
        })
        res.send({"ok":true});
    } catch (error) {
        res.send({"ok": false, "error": "failed to add listem!"});   
    }
}

exports.DeleteListem = async(req, res) => {
    Listem.findByIdAndDelete({_id: req.params.id}).then( () => {
        res.send({"ok": true});
    })
}