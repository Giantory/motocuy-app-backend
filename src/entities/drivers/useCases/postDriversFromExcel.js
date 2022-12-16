import { mysqlConnection } from '../../../config/database.js';
import multer from 'multer';
import readXlsxFile from 'read-excel-file/node'
import path from 'path'
import fs from 'fs';
import { nanoid } from 'nanoid'


const postDrivers = (req, res) => {
    try {
        importFileToDb(req.file.path, req.body.district, req.body.province, req.body.department);
        return res.status(200).json({ message: 'Datos importados correctamente', status: 'OK' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error al importar los datos', status: 'ERROR' })
    }
}

function importFileToDb(exFile, district, province, department) {
    readXlsxFile(exFile).then((rows) => {
        const data = rows.shift()
        for (let i = 0; i < rows.length; i++) {
            const id = nanoid();
            rows[i].unshift(id);
            rows[i].push(department);
            rows[i].push(province);
            rows[i].push(district);
        }
        console.log([rows]);
        let query = 'INSERT INTO users_drivers (id_firebase, company, document,' +
            'document_type, nameuser, lastname, model_car, license, phone_contact, placa_car, department_id, province_id, district_id) VALUES ?'
        mysqlConnection.query(query, [rows], (error, response) => {
            console.log(error || response)
        })
    })
}

export default postDrivers