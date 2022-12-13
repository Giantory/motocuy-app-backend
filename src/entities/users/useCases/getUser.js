import { mysqlConnection } from '../../../config/database.js';


const getUser = async (req, res) => {

   
    await mysqlConnection.query(
        ` SELECT name, lastname, typeUser, sex, ruc, email, phoneNumber, province, department, district FROM users WHERE id = '${req.body.user}'`
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getUser