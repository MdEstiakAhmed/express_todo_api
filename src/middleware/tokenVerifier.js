var jwt = require('jsonwebtoken');

module.exports = async(req, res, next) => {
    try {
        const { token } = req.headers;
        if(token){
            let jwtData = await jwt.verify(token, process.env.APP_SECRET_KEY);
            if (jwtData){
                req.headers.username = jwtData.username;
                next();
            }
            else{
                return res.status(401).json({ status: false, message: 'unauthorized' });
            }
        }
        else{
            return res.status(401).json({ status: false, message: 'token undefined' });
        }
    } 
    catch (error) {
        console.log(error);
        return res.status(400).json({ status: false, message: 'app error' });
    }
}