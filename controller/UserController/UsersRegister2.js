const users = require("../../models/users")
const connectionn = require('../../server')

module.exports = async (req, res) => {
    const name = req.body.username
    const phon = req.body.phon
    const email = req.body.email
    const password = req.body.password
    const confrimpassword = req.body.confrimpassword
    if(name == "" || phon == "" || email == "" || password == "" || confrimpassword == ""){
        return res.status(404).send({massage: `not data`})
    }
    if(password != confrimpassword){
        return res.status(404).send({massage: `password ไม่ตรงกัน`})
    }

    connectionn.query(`SELECT * FROM users WHERE email_user = "${req.body.email}"`,
    function(err, results) {
      //console.log(results.length)
      if (results.length >= 1){
          return  res.status(404).send({massage: `มีผู้ใช้งานแล้ว ${err}`})
      }
          users.createUsers({req})
          res.status(201).redirect('/UserLogin')
    })
    
}