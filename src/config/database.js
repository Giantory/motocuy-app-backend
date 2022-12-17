import mysql from 'mysql';

export const mysqlConnection = mysql.createConnection({
    host: '136.243.15.121',
    user: 'gxfrggso_martin',
    password: '5SVfw,UiYoVy',
    database: 'gxfrggso_motocuy'
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


