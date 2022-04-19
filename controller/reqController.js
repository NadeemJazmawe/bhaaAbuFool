const Requirement = require('../schema/requirement');


exports.Requirement = async(req, res) => {
    Requirement.find({}).then(function(requirement){
        res.send(requirement);
    })
}

exports.AddRequirement = async(req, res) => {
    const {from, to, text} = req.body;

    const requirementToAdd = new Requirement({
        from: from,
        to: to,
        text: text
    })

    requirementToAdd.save().then(() => {
        console.log("requirement Adeed");
    })

    res.send({"ok":true});
}


exports.DeleteRequirement = async(req, res) => {
    // res.send({"ok": true});

    Requirement.findByIdAndDelete({_id: req.params.id}).then(() => {
        res.send({"ok": true});
    })
}