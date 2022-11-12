const {verify} = require('jsonwebtoken');

module.exports = {
    checkToken: (req,res, next) => {
        let token = req.get('authorization');
        if(token){
            token = token.slice(7);
            verify(token, "qwe1234", (err, decodedres) =>{
                if(err){
                    return res.json({
                        status: 419,
                        success: 0,
                        message: "Invalid token"
                    });
                }else{
                    next();
                }
            })
        }else{
            return res.json({
                status: 401,
                message: "Access denied! Unauthorize user"
            });
        }
    }
};