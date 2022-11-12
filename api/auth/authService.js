const pool = require('../../config/database');

module.exports = {
    getUserByEmail: (email, callback) => {
        pool.query(
            `select * from users where email = ?`,
            [
                email,
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