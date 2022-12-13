import { mysqlConnection } from '../../../config/database.js';


const getAllPassengers = (req, res) => {

    const departmentFilterConditional = () => {
        if (req.body.department && req.body.department !== 0) {
            return ` AND dp.departments_id=${req.body.department}`;
        } else {
            return '';
        }
        return "";
    }
    const provinceFilterConditional = () => {
        if (req.body.province && req.body.province !== 0) {
            return ` AND pv.id=${req.body.province}`;
        } else {
            return '';
        }
        return "";
    }    
    
    const districtFilterConditional = () => {
        if (req.body.district && req.body.district !== 0) {
            return ` AND dt.id=${req.body.district}`;
        } else {
            return '';
        }
        return "";
    }

    


    mysqlConnection.query(
        ` SELECT uc.id_firebase, uc.birthday, uc.email, UPPER(CONCAT(uc.name_client, " ", uc.lastname_client)) fullname, uc.number_phone, uc.create_at ,pv.name AS province, dp.name AS department, dt.name AS district` +
        ` FROM users_clients uc JOIN departments dp ON uc.department_id = dp.departments_id` +
        ` JOIN provincies pv ON pv.id = uc.province_id` +
        ` JOIN districts dt ON dt.id = uc.district_id` +
        ` WHERE id_registro <> 0 ${provinceFilterConditional()}${departmentFilterConditional()}${districtFilterConditional()}`, (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getAllPassengers;
