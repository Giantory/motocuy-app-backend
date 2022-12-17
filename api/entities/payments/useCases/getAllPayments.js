import { mysqlConnection } from '../../../config/database.js';


const getAllPayments = (req, res) => {

   
    mysqlConnection.query(
        ` SELECT id, name FROM provincies WHERE department_id = ${req.body.department}`
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getAllPayments;
