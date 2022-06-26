const Listem = require('../schema/listem');

exports.Listem = async(req, res) => {
    Listem.find({"name": req.cookiesUserid.userid }).then(function(listems){
        res.send(listems);
    })
}

exports.AddListem = async(req, res) => {
    try {
        const {text, endDate} = req.body;
        let date = new Date();

        const ListemToAdd = new Listem({
            name: req.cookiesUserid.userid,
            text: text,
            startDate: date.getDate() + "/" + (date.getMonth()+1),
            endDate: endDate
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