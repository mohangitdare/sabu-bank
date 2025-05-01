const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');
const loanSchema = new mongoose.Schema({
    productName: { type: String, required: true, unique:true },
    interestRate: { type: Number, required: true },
    minAmount: { type: Number, required: true },
    maxAmount: { type: Number, required: true },
    tenure: { type: Number, required: true },
    termsAndConditions: { type: String, required: true },
    loanType: { type: String },
    processingFee: { type: Number },
    latePaymentPenalty: { type: String },
    prepaymentOptions: { type: String },
})

// loanSchema.plugin(uniqueValidator);

const LoanProduct = mongoose.model('loanProduct', loanSchema)

module.exports = LoanProduct;