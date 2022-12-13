import { mysqlConnection } from '../../../config/database.js';


const postDriver = (req, res) => {

   
    mysqlConnection.query(
        ` SELECT UPPER(CONCAT(nameuser,' ' , lastname)) fullname, document ,company, credit, placa_car, license, phone_contact FROM users_drivers WHERE id_firebase = ${req.body.driver}`
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default postDriver