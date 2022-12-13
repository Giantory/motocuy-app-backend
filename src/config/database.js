import mysql from 'mysql';

export const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chapatu_noviembre'
})

export const connectToDb = async () => {
    try {
        const connection = mysqlConnection.connect() 
        console.info(`Database Connected`);
        return connection;
    } catch (error) {
        console.error(`Database connection error: ${error}`);
    }
};


