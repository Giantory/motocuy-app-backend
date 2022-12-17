import { mysqlConnection } from '../../../config/database.js';


const getTravelsPerMonth = (req, res) => {
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
        ` SELECT COUNT(*) AS COUNT, MONTHNAME(DATE(vd.create_at)) AS DATE`+ 
        ` FROM viajes_drivers vd`+
        ` JOIN users_drivers ud`+
        ` ON vd.placa_conductor = ud.placa_car`+
        ` WHERE vd.create_at >= date_sub(curdate(), INTERVAL 12 MONTH) ${createdFilterConditional()}${provinceFilterConditional()}${departmentFilterConditional()}${districtFilterConditional()}`+
        ` GROUP BY date `
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getTravelsPerMonth;
