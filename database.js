const fs = require('fs');
const mysql = require('mysql2');
let conf = JSON.parse(fs.readFileSync('conf.json'));
conf.ssl = {
    ca: fs.readFileSync(__dirname + '/ca.pem')
}
const connection = mysql.createConnection(conf);


const executeQuery = (sql) => {
   return new Promise((resolve, reject) => {      
         connection.query(sql, function (err, result) {
            if (err) {
               console.error(err);
               reject();     
            }   
            console.log('done');
            resolve(result);         
      });
   })
}

const database = {
    
}

module.exports = database;

