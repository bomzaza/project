const connectionn = require('../../server')
module.exports = (req, res) => {
    connectionn.query(`SELECT * FROM reserve WHERE id_name_reserve = 0`,
    (err, results) => {
     //res.json(results)
     res.render('index',{results})
     }
   ) 
}