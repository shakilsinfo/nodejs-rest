const pool = require('../../config/database');

module.exports = {
    storeUser: (data, callback) => {
        pool.query(
            `insert into users(name, email, password) values(?,?,?)`,
            [
                data.name,
                data.email,
                data.password
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null,results);
            }
        )
    }
};