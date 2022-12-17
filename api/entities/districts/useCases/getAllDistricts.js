import { mysqlConnection } from '../../../config/database.js';


const getAllDistricts = (req, res) => {


    const districtsFilterConditional = () => {
        if (req.body.province) {
            return ` AND province_id=${req.body.province}`;
        } else {
            return '';
        }
    }

   
    mysqlConnection.query(
        ` SELECT id, name FROM districts WHERE province_id <> 0 ${districtsFilterConditional()}`
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getAllDistricts;

