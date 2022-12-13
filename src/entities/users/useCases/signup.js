import { mysqlConnection } from '../../../config/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid'



const signup = async (req, res) => {
    const { name, lastname, typeUser, sex, ruc, rzSocial, email, phoneNumber, province, department, district, password } = req.body;
    const id = nanoid();
    const hashedPassword = await hashPassword(password);
    let token = "";

    let user = null;
    await mysqlConnection.query(
        ` SELECT *  FROM  users WHERE email = '${email}'`
        , async (err, rows, fields) => {
            if (!err) {
                if (rows.length != 0) {
                    res.status(409).json({ success: false, message: "El email ingresado ya está en uso." })
                } else {
                    await mysqlConnection.query(
                        ` INSERT INTO users(id, NAME, lastname, typeUser, sex, ruc, rzSocial, email, phoneNumber, province, department, district, password) 
                    VALUES ('${id}', '${name}' , '${lastname}', '${typeUser}', '${sex}','${ruc}', '${rzSocial}','${email}', ${phoneNumber}, ${province}, ${department}, ${district}, '${hashedPassword}');`
                        , (err, rows, fields) => {
                            if (!err) {
                                res.status(201).json({ success: true, message: "¡El usuario ha sido creado!", status: 'OK' })
                            } else {
                                console.log(err)
                            }
                        })
                }
            } else {
                console.log(err)
            }
        });
}

async function hashPassword(password) {
    return bcrypt.hash(password, 10);
}


export default signup
