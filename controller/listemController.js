const Listem = require('../schema/listem');

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