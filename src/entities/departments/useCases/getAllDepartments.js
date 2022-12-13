import { mysqlConnection } from '../../../config/database.js';


const getAllDepartments = (req, res) => {


    const departmentFilterConditional = () => {
        if (req.body.department) {
            return ` AND name=${req.body.department}`;
        } else {
            return '';
        }
    }

    mysqlConnection.query(
        ` SELECT departments_id, name FROM departments WHERE departments_id <> 0 ${departmentFilterConditional()}`
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getAllDepartments;
