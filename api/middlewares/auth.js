import jwt from "jsonwebtoken";
import { mysqlConnection } from "../config/database.js";


const auth = (req, res, next) => {
    try {
        const token = req.headers['token'];
        if (!token) return res.status(401).json({ message: 'Unauthorized' })

        const decoded = jwt.verify(token, 'MOTOCUY_TOKEN');
        console.log(decoded);
        mysqlConnection.query(
            ` SELECT * FROM users WHERE id = '${decoded.id}'`
            , (err, rows, fields) => {
                if (!err) {
                    if (rows.length === 0) {
                        return res.status(401).json({ message: 'Unauthorized' })
                    }
                    next();
                } else {
                    console.log(err)
                }
            })
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

}

export default auth;