const Transaction = require('../db/table/transaction')

getTransactions = async (req, res) => {
    await Transaction.find({}, (err, ts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!ts.length) {
            return res
                .status(404)
                .json({ success: false, error: `ts not found` })
        }
        return res.status(200).json({ success: true, data: ts })
    }).catch(err => console.log(err))
}

module.exports = {
    getTransactions
}