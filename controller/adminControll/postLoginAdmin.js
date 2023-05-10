const Connectionn = require("../../server")
module.exports = (req, res) => {
    const username = req.body.username
    const password = req.body.password
    Connectionn.query(`SELECT * FROM admin WHERE username = '${username}' AND password = '${password}'`,
                    (err, result) => {
                    if(err){
                      res.status(404).send(err)
                    }
                    if(result.length <= 0){
                       //console.log(result)  
                       return res.redirect('loginAdmin')
                    }   
                       //console.log(result)
                       req.session.username = username
                       return res.redirect('/admin')
            }
       )
    
}