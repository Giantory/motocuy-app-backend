import { mysqlConnection } from '../../../config/database.js';
import { compare } from "bcrypt";
import jwt from 'jsonwebtoken';


const login = (req, res) => {

    const { email, password } = req.body;
    mysqlConnection.query(
        ` SELECT * FROM users WHERE email = '${email}'`
        , async (err, rows, fields) => {
            if (!err) {
                if (rows.length === 0) {
                    res.status(401).json({ success: false, message: "El correo electrónico o la contraseña son incorrectos", status: 'failed' })
                } else {
                    const matchPassword = await verifyPassword(password, rows[0].password);
                    console.log(matchPassword);
                    console.log(password, rows[0].password);
                    if (!matchPassword) {
                        res.status(401).json({ success: false, message: " la contraseña son incorrectos", status: 'failed' })
                    } else {
                        const token = jwt.sign({ id: rows[0].id, name: rows[0].name, typeUser: rows[0].typeUser, department: rows[0].department, province: rows[0].province, district: rows[0].district },
                        "MOTOCUY_TOKEN", { expiresIn: 86400 })
                        req.decoded = jwt.verify(token, "MOTOCUY_TOKEN");
                        res.status(201).json({ success: true, data: req.decoded, meta:{ token }, message: "Bienvenido", status: 'OK' })
                    }
                }

            } else {
                console.log(err)
            }
        })
}

function verifyPassword(password, passwordToMatch) {    
    return compare(password, passwordToMatch);
}


export default login;