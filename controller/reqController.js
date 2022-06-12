const Requirement = require('../schema/requirement');


exports.Requirement = async(req, res) => {
    try {
        Requirement.find({to: req.cookiesUserid.userid}).then(function(requirement){
            res.send(requirement);
        })
    } catch (error) {
        res.send({"ok": false});
    }
}

exports.AddRequirement = async(req, res) => {
    try {
        const {from, to, text} = req.body;
        const requirementToAdd = new Requirement({
            from: req.cookiesUserid.userid,
            to: to,
            text: text
        })

        requirementToAdd.save().then(() => {
            console.log("requirement Adeed");
        })

        res.send({"ok":true, "msg": "requirments added!"});   
    } catch (error) {
        console.log("error from AddRequirement");
        res.send({"ok": false});
    }
}


exports.DeleteRequirement = async(req, res) => {
    // res.send({"ok": true});

    Requirement.findByIdAndDelete({_id: req.params.id}).then(() => {
        res.send({"ok": true});
    })
}