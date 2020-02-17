export default function Security(req, res, next){
    let idToken = req.params.idToken
    // if(idToken expires){
    //     res.status(401).json({ "message": "The incoming token has expired" })
    // }
    next();
}