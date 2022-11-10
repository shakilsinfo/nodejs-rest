const { storeUser } = require('./service');
const validator = require('express-validator');
const bcrypt = require('bcrypt');


module.exports = {
    saveUser: async(request,response) => {
        
        const body = request.body;
        const salt = await bcrypt.genSaltSync(10);
        body.password = await bcrypt.hashSync(body.password, salt);
        
        storeUser(body, (error, results) => {
            
            if(error){
                return response.status(500).json({
                    status: 500,
                    success: 0,
                    message: error
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