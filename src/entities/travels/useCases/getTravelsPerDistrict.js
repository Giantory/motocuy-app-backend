import { mysqlConnection } from '../../../config/database.js';


const getTravelsPerDistrict = (req, res) => {

    const districtsFilterConditional = () => {
        if (req.body.province) {
            return ` d.province_id=${req.body.province}`;
        } else {
            return '';
        }
    }
   
    mysqlConnection.query(
        ` SELECT d.name, COUNT(*) viajes FROM viajes_drivers vd
        INNER JOIN users_drivers ud ON vd.placa_conductor = ud.placa_car 
        INNER JOIN districts d ON ud.district_id = d.district_id
        WHERE ${districtsFilterConditional()}
        GROUP BY d.name `
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getTravelsPerDistrict
