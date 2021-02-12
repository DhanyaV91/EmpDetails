const conn = require('../configuration/mysql-config');
const secretkey = require('../secret.key');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if('username' in req.body && 'password' in req.body){
        const sql = 'select * from userlogindata where username = ? and password = ?';
        const data = [req.body.username, req.body.password];
        conn.query(sql, data, (err, results) => {
            if(err) throw err;
            const isvalidUser = (results.length == 1);
            if(isvalidUser){
                let user = results[0];
                
            
            const payload = {
                sub:user.username,
                iat:Date.now()
            }

            const token = jwt.sign(payload, secretkey);
            res.json({token});

            }else{
                res.status(401);
                res.json({msg:"Invalid username/password!"});
            }
        });
    }
}