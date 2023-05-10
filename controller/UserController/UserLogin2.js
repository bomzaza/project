const connectionn = require('../../server')
const bcrpt = require('bcrypt')

module.exports = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    //console.log(req.body)
    connectionn.query(`SELECT * FROM users WHERE email_user = "${email}" AND password_user = "${password}"`,
        (err, results) => {
            if(err){
              res.status(404).send(err)
            }
            if(results.length <= 0){
               //console.log(result)  
               return res.redirect('UserLogin')
            }   
               //console.log(result)
               req.session.email = email
               for (const item of results) {
                req.session.id_user = item.id_user
                req.session.name_user = item.name_user
               }
               id = req.session.id_user
               name_user = req.session.name_user
               return res.render('UsersIndex', {email: req.session.email ,id: req.session.id_user, name_user: req.session.name_user})
    })
    
}