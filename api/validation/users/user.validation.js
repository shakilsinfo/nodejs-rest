const {user} = require('./user.schema');

module.exports = {
    userValidation: async (req,res,next)=> {
        const value = await user.validate(req.body);

        if(value.error){
            return res.json({
                status: 402,
                success: 0,
                message: value.error.details[0].message
            });
        }else{
            next();
        }
    }
}