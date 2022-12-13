import { mysqlConnection } from '../../../config/database.js';


const getTravelsPerDriver = (req, res) => {
   
    mysqlConnection.query(
        ` SELECT create_at, origen, destino, precio  FROM viajes_drivers WHERE placa_conductor = ${req.body.placa}`
        , (err, rows, fields) => {
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
}

export default getTravelsPerDriver

