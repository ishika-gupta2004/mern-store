const jwt = require ("jsonwebtoken");

module.exports = (req,resp,next) => {
    const token = req.headers.authorization

    if(!token){
        return resp.json({message:"No token"})
    }
    

    try{
        const decoded = jwt.verify(token,"secretkey")
        req.userId = decoded.userId
        next()
    }catch(err){
        resp.status(401).json({message:"Invalid Token"})
    }
}