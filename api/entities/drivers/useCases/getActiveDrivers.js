import { mysqlConnection } from '../../../config/database.js';


const getActiveDrivers = (req, res) => {

    const departmentFilterConditional = () => {
        if (req.body.department && req.body.department !== 0) {
            return ` AND ud.department_id=${req.body.department}`;
        } else {
            return '';
        }
        return "";
    }
    const provinceFilterConditional = () => {
        if (req.body.province && req.body.province !== 0) {
            return ` AND ud.province_id=${req.body.province}`;
        } else {
            return '';
        }
        return "";
    }    
    
    const districtFilterConditional = () => {
        if (req.body.district && req.body.district !== 0) {
            return ` AND ud.district_id=${req.body.district}`;
        } else {
            return '';
        }
        return "";
    }

    const createdFilterConditional = () => {
        if (req.body.created && req.body.created !== 0) {
            return ` AND DATEDIFF(NOW(), create_at) <${req.body.created}`;
        } else {
            '';
        }
        return "";
    }
    


    mysqlConnection.query(
        ` SELECT COUNT(*) as active_drivers FROM users_drivers ud `+ 
        ` WHERE id_registro <> 0 AND status='active' ${createdFilterConditional()}${provinceFilterConditional()}${departmentFilterConditional()}${districtFilterConditional()}`, (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}


export default getActiveDrivers;
