const { getUserByEmail } = require('./authService');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    login: async(req, res) => {
        const requestData = await req.body;
        getUserByEmail(requestData.email, (err,results) => {
            if(err){
                return response.status(500).json({
                    status: 500,
                    success: 0,
                    message: error
                });
            }
            if( !results){
                return response.status(500).json({
                    status: 419,
                    success: 0,
                    data: 'Invalid email or password'
                }); 
            }
            
            const result = bcrypt.compareSync(requestData.password,results[0].password);
            if(result) {
                results.password = undefined;
                const token = jwt.sign({result: results}, "qwe1234", {
                    expiresIn: "1hr"
                });

                return res.json({
                    status: 200,
                    success: 1,
                    message: "Login Successfully",
                    token: token,
                    data: results
                });
            }else{
                return  res.json({
                    status: 419,
                    success: 0,
                    message: "Invalid email or password"
                });
            }

        });
    },
};