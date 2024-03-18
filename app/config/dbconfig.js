//?THIS IS THE DATABASE CONFIGUATION FILE


//?import our mysql Package
const mysql = require('mysql')
//* OUR MYSQL CONNECTION VARIABLE
const pool = mysql.createPool({
    host:'localhost',
    port: '3306',
    user: 'root',
    database: 'movies'
})

//below code allows "pool" variable to be accessed from anywhere in our project;
module.exports = pool;
pool.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.')
      }
    }
  
    if (connection) connection.release()
  
    return
  })
