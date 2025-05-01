const LoanProduct = require("./../Models/loanProductModel")

exports.getAllLoanProducts = async (req, res) => {
    try {
        const loanProducts = await LoanProduct.find();
        res.status(200).json({
            status: "success",
            data: {
                loanProducts: loanProducts
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
};

exports.createLoanProduct = async (req, res) => {
    try {
        const loanProduct = await LoanProduct.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                loanProduct: loanProduct
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
};

exports.getLoanProductById = async (req, res) => {
    try {
        const loanProduct = await LoanProduct.findById(req.params.id);
        if (!loanProduct) {
            return res.status(404).json({
                status: "failed",
                message: "Loan product not found"
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                loanProduct: loanProduct
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
};

exports.updateLoanProductById = async (req, res) => {
    try {
        const loanProduct = await LoanProduct.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!loanProduct) {
            return res.status(404).json({
                status: "failed",
                message: "Loan product not found"
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                loanProduct: loanProduct
            }
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
};

exports.deleteLoanProductById = async (req, res) => {
    try {
        const loanProduct = await LoanProduct.findByIdAndDelete(req.params.id);
        if (!loanProduct) {
            return res.status(404).json({
                status: "failed",
                message: "Loan product not found"
            });
        }
        res.status(204).json({
            status: "success",
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
};
