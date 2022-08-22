const Data = require('../schema/data')
const Client = require('../schema/client');

exports.GetData = async(req, res) => {
    try {
        const {month, year, deficiency} = req.body;
        if(deficiency){
            Data.find({month: month, year: year,
                $or: [{vatMaterial: false},
                {hourlyReport : false},
                {vat : false},
                {taxAdvances : false},
                {socialSecurity : false},
                {employeeDeductions : false},
                {employeesSocialSecurity : false},
                {PaymentStatus : false},
                {expensesCollection  : false}]}).then(function(getData){
                res.send(getData);
            })
        }else{
            Data.find({month: month, year: year}).then(function(getData){
            res.send(getData);
            })
        }
        
    } catch (error) {
        res.send({"ok": false});
    }

}

exports.BuildData = async(req, res) => {
    try {
        console.log("here");
        Client.find({}).then(function(clients){
            let length = clients.length
            for(let i=0 ; i < length ; i++){
                let id = clients[i]._id
                let name = clients[i].name
                const {month, year} = req.body;

                Data.findOne({key: id, month: month, year: year}).then(function(dd){
                    console.log("here2");

                    if(dd === null){
                        console.log("here3");

                        const dataToAdd = new Data({
                                key: id,
                                name: name,
                                allFilled: false,
                                month: month,
                                year: year
                        })
    
                        dataToAdd.save();
                    }
                })
            }

        })
    } catch (error) {
        res.send({"ok": false, "error": "failed to update client data!"});   
    }
}

exports.DeleteData = async(req, res) => {
    try {
        const {month, year} = req.body;
        console.log("asdasd");
       
        Data.find({month: month, year: year}).then(function(clients){
            let length = clients.length

            for(let i=0 ; i < length ; i++){
                let id = clients[i].id
                console.log(id);
                Data.findByIdAndDelete({_id: id}).then(() => {
                    console.log("data deleted");
                })
            }
        })

    } catch (error) {
        res.send({"ok": false});
    }
};




exports.UpdatevatMaterial = async(req, res) => {
    const {vatMaterial} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{vatMaterial: vatMaterial}).then(() => {
        res.send({"ok": true});
    })
} 

exports.UpdatehourlyReport = async(req, res) => {
    const {hourlyReport} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{hourlyReport: hourlyReport}).then(() => {
        res.send({"ok": true});
    })
    // updateNumberOfElements( vatMaterial );
}

exports.Updatevat = async(req, res) => {
    const {vat} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{vat: vat}).then(() => {
        res.send({"ok": true});
    })
    // updateNumberOfElements( vatMaterial );
}

exports.UpdatetaxAdvances = async(req, res) => {
    const {taxAdvances} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{taxAdvances: taxAdvances}).then(() => {
        res.send({"ok": true});
    })
    // updateNumberOfElements( vatMaterial );
}

exports.UpdatesocialSecurity = async(req, res) => {
    const {socialSecurity} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{socialSecurity: socialSecurity}).then(() => {
        res.send({"ok": true});
    })
    // updateNumberOfElements( vatMaterial );
}

exports.UpdateemployeeDeductions = async(req, res) => {
    const {employeeDeductions} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{employeeDeductions: employeeDeductions}).then(() => {
        res.send({"ok": true});
    })
    // updateNumberOfElements( vatMaterial );
}

exports.UpdateemployeesSocialSecurity = async(req, res) => {
    const {employeesSocialSecurity} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{employeesSocialSecurity: employeesSocialSecurity}).then(() => {
        res.send({"ok": true});
    })
    // updateNumberOfElements( vatMaterial );
}

exports.UpdatePaymentStatus = async(req, res) => {
    const {PaymentStatus} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{PaymentStatus: PaymentStatus}).then(() => {
        res.send({"ok": true});
    })
    // updateNumberOfElements( vatMaterial );
}

exports.UpdateexpensesCollection = async(req, res) => {
    const {expensesCollection} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{expensesCollection: expensesCollection}).then(() => {
        res.send({"ok": true});
    })
    // updateNumberOfElements( vatMaterial );
}

