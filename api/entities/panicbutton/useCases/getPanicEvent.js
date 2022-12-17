import { mysqlConnection } from '../../../config/database.js';


const getPanicEvent = (req, res) => {


    mysqlConnection.query(
        ` SELECT pe.location, d.name district ,pe.date, vd.placa_conductor, vd.conductor, ud.district_id FROM panic_event pe 
        INNER JOIN viajes_drivers vd
        ON pe.firebase_n2 = vd.id_firebase
        INNER JOIN users_drivers ud 
        ON ud.placa_car = vd.placa_conductor
        INNER JOIN districts d
        ON d.district_id = ud.district_id;`
        
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getPanicEvent