const Requirement = require('../schema/requirement');


exports.Requirement = async(req, res) => {

    try {
        Requirement.find({to: req.cookiesUserid.userid}).then(function(getRequirement){
            res.send(getRequirement);
        })
    } catch (error) {
        res.send({"ok": false});
    }
}

exports.SendRequirement = async(req, res) => {
    // console.log("nana");

    // try {
    //     Requirement.find({to: req.cookiesUserid.userid}).then(function(getRequirement){
    //         res.send(getRequirement);
    //     })
    // } catch (error) {
    //     res.send({"ok": false});
    // }

    try {
        Requirement.find({from: req.cookiesUserid.userid}).then(function(sendRequirement){
            res.send(sendRequirement);
        })
    } catch (error) {
        res.send({"ok": false});
    }
}

exports.AddRequirement = async(req, res) => {
    try {
        let date = new Date();
        const {to, text, endDate} = req.body;
        const requirementToAdd = new Requirement({
            from: req.cookiesUserid.userid,
            to: to,
            text: text,
            startDate: date.getDate() + "/" + (date.getMonth()+1),
            endDate: endDate,
            done: false
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


exports.UpdateRequirement = async(req, res) => {
    // res.send({"ok": true});
    const {done} = req.body;

    Requirement.findByIdAndUpdate({_id: req.params.id},{done: done}).then(() => {
        res.send({"ok": true});
    })
}

