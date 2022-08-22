const Data = require('../schema/data')
const Client = require('../schema/client');

exports.GetData = async(req, res) => {
    try {
        const {month, year} = req.body;
        Data.find({month: month, year: year}).then(function(getData){
            console.log(getData);
            res.send(getData);
        })
    } catch (error) {
        res.send({"ok": false});
    }
    // console.log("asdasd");
    // try {
    //     Data.find({}).then(function(getData){
    //         console.log(getData);
    //         res.send(getData);
    //     })
    // } catch (error) {
    //     res.send({"ok": false});
    // }
}

exports.UpdateData = async(req, res) => {
    try {
        Client.find({}).then(function(clients){
            let length = clients.length
            for(let i=0 ; i < length ; i++){
                // console.log(clients[i].name);
                let id = clients[i]._id
                let name = clients[i].name

                let date = new Date();

                let month = date.getMonth() + 1
                let year = date.getFullYear()
                
                Data.findOne({key: id}).then(function(dd){
                    if(dd === null){
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

exports.findByData = async(req, res) => {
    try {
        const {month, year} = req.body;
        Data.find({month: month, year: year}).then(function(getData){
            res.send(getData);
        })
    } catch (error) {
        res.send({"ok": false});
    }
};

updateAllFilled = async ( id ) => {
    let filled = true;
    let _numberOfElements = Data.findOne({_id: id}).then(function(data){
        return data.numberOfElements;
    })
    if(_numberOfElements != 9){
        filled = false;
    }
    Data.findByIdAndUpdate({_id: id},{allFilled: filled}).then(() => {
        res.send({"ok": true});
    })
}

updateNumberOfElements = async ( dataRecived, id ) => {
    let increaseDecreaceValues = 1;
    if( !dataRecived ) {
        increaseDecreaceValues = -1;
    }
    Data.findByIdAndUpdate({_id: id},{numberOfElements: numberOfElements + increaseDecreaceValues}).then(() => {
        res.send({"ok": true});
    });
    updateAllFilled( id );
};

exports.UpdatevatMaterial = async(req, res) => {
    const {vatMaterial} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{vatMaterial: vatMaterial}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial, req.params.id );
} 

exports.UpdatehourlyReport = async(req, res) => {
    const {hourlyReport} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{hourlyReport: hourlyReport}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial );
}

exports.Updatevat = async(req, res) => {
    const {vat} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{vat: vat}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial );
}

exports.UpdatetaxAdvances = async(req, res) => {
    const {taxAdvances} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{taxAdvances: taxAdvances}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial );
}

exports.UpdatesocialSecurity = async(req, res) => {
    const {socialSecurity} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{socialSecurity: socialSecurity}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial );
}

exports.UpdateemployeeDeductions = async(req, res) => {
    const {employeeDeductions} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{employeeDeductions: employeeDeductions}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial );
}

exports.UpdateemployeesSocialSecurity = async(req, res) => {
    const {employeesSocialSecurity} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{employeesSocialSecurity: employeesSocialSecurity}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial );
}

exports.UpdatePaymentStatus = async(req, res) => {
    const {PaymentStatus} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{PaymentStatus: PaymentStatus}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial );
}

exports.UpdateexpensesCollection = async(req, res) => {
    const {expensesCollection} = req.body;
    Data.findByIdAndUpdate({_id: req.params.id},{expensesCollection: expensesCollection}).then(() => {
        res.send({"ok": true});
    })
    updateNumberOfElements( vatMaterial );
}

