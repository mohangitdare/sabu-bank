// const express = require("express")
// const router = express.Router();
// const loanProductController =  require("./../Controllers/loanProductController");

// router.route("/").get(loanProductController.getAllLoanProducts).post(loanProductController.createLoanProduct)

// router.route("/:id").get(loanProductController.getLoanProductById).delete(loanProductController.deleteLoanProductById).patch(loanProductController.updateLoanProductById)

// module.exports = router;
const express = require("express")
const router = express.Router();
const loanProductController =  require("./../Controllers/loanProductController");

router.route("/")
  .get(loanProductController.getAllLoanProducts)
  .post(loanProductController.createLoanProduct);

router.route("/:id")
  .get(loanProductController.getLoanProductById)
  .delete(loanProductController.deleteLoanProductById)
  .patch(loanProductController.updateLoanProductById);

module.exports = router;