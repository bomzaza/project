const connectionn = require('../server')
const bcrpt = require('bcrypt')
module.exports = {

  async  createUsers ({req}) {
        // const password = await bcrpt.hash(req.body.password, 10)
        connectionn.query(
            'INSERT INTO `users`( `name_user`, `phon_number`, `email_user`, `password_user`) values (?, ?, ?, ?)',
            [req.body.username, req.body.phon, req.body.email, req.body.password],
            function(err, results) {
              return results
            })
    },

        reserve(id_user,userscustomer,phoncustomer,dateStart,dateEnd,idroom){
          connectionn.query(
              'INSERT INTO `reserve`(`id_user`,`name`, `phon`, `day_start`, `day_end`, `id_name_reserve`, `status_room`, `id_room`) values (?, ?, ?, ?, ?, ?, ?, ?)',
              [id_user,userscustomer, phoncustomer, dateStart, dateEnd, 0, 1, idroom],
              function(err, results) {
              console.log(results);
            }
          )
        }
    

}

