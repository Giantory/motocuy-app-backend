import { mysqlConnection } from '../../../config/database.js';


const getAllProvincies = (req, res) => {   


    const provinciesFilterConditional = () => {
        if (req.body.department) {
            return ` AND department_id=${req.body.department}`;
        } else {
            return '';
        }
    }
    
    mysqlConnection.query(
        ` SELECT id, name FROM provincies WHERE department_id <> 0 ${provinciesFilterConditional()}`
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getAllProvincies;

