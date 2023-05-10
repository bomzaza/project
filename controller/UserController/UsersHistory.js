const connectionn = require('../../server')
module.exports = (req, res) => {
    connectionn.query(`SELECT * FROM reserve WHERE id_user = ${req.session.id_user}`,
       (err, results) => {
        // console.log(results)
        // console.log(req.session.id_user)
        res.render('UsersHistory', {email: req.session.email ,id: req.session.id_user, name_user: req.session.name_user, results})
        }
      ) 
}