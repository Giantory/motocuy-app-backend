import { mysqlConnection } from '../../../config/database.js';


const getPaymentsPerDriver = (req, res) => {

    mysqlConnection.query(
        ` SELECT date_approved, transaction_amount FROM mercadopago_payments WHERE external_reference=${req.body.id_firebase}`
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getPaymentsPerDriver;

