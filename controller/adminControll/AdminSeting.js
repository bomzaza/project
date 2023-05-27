const connectionn = require('../../server')
module.exports = (req, res) => {
     connectionn.query(`SELECT * FROM room`,
     (err, results) => {
      //res.json(results)
      res.render('allSeting', {results})
      }
    ) 
}