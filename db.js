const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //sesuaikan dengan username mysql masing masing
    password: '', //sesuailan dengan password mysql masing masing
    database: 'kuliah',
});

connection.connect((err) => {
    if (err) {
        console.error('error connecting to MySQL database:', err);
    } else {
        console.log('connected to MySQL database');
    }
});

module.exports = connection;
