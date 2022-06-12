const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DataSchema = new Schema({
    key:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    vatMaterial:{ // חומר מעם - מסר/לא
        type: Boolean,
        required: false,
        default: false
    },
    hourlyReport:{ // קבלת דיווח שעות - מסר/לא
        type: Boolean,
        required: false,
        default:false
    },
    // דיווח - שודר\לא
    vat:{ // מעמ
        type: Boolean,
        required: false,
        default:false
    },
    taxAdvances:{ // מקדימות מס הכנסה
        type: Boolean,
        required: false,
        default:false
    },
    socialSecurity:{ // ביטוח ליאומי
        type: Boolean,
        required: false,
        default:false
    },
    employeeDeductions:{ // ניכויים עובדים
        type: Boolean,
        required: false,
        default:false
    },
    employeesSocialSecurity:{ // ביטוח ליאומי לעובדים
        type: Boolean,
        required: false,
        default:false
    },
    PaymentStatus :{ // סטטוס תשלומים ללקוח
        type: Boolean,
        required: false,
        default:false
    },
    expensesCollection:{ // גביית שכ"ט למשרד
        type: Boolean,
        required: false,
        default:false
    },
   

})



const Data = mongoose.model("Data", DataSchema);

module.exports = Data;