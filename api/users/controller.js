const createUser = require('./service');
const validator = require('express-validator');
const { hashPassword, saltSync } = require('bcrypt');

module.exports = {
    saveUser: (request,response) => {
        const requestData = request.body;
        const salt = hashPassword(10);
        requestData.password = saltSync(requestData.password, salt);
        createUser(requestData, (error, results) => {
            if(error){
                return response.status(500).json({
                    status: 500,
                    success: 0,
                    message: "Something went wrong"
                });
            }
            return response.status(200).json({
                status: 200,
                success: 1,
                message: "User Create Successfully",
                data: results
            });
        });
    }
}