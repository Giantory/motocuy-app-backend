import { mysqlConnection } from '../../../config/database.js';


 const getAllDrivers = (req, res) => {

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
        ` SELECT id_firebase, placa_car, UPPER(CONCAT(ud.nameuser,' ' , ud.lastname)) fullname, ud.company, ud.license, ud.phone_contact, ud.create_at ,pv.name AS province, dp.name AS department, dt.name AS district` +
        ` FROM users_drivers ud JOIN departments dp ON ud.department_id = dp.departments_id` +
        ` JOIN provincies pv ON pv.id = ud.province_id` +
        ` JOIN districts dt ON dt.id = ud.district_id` +
        ` WHERE id_registro <> 0 ${provinceFilterConditional()}${departmentFilterConditional()}${districtFilterConditional()}`, (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getAllDrivers;

