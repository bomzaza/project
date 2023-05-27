const connectionn = require('../../server')
module.exports = (req, res) => {
     connectionn.query(`SELECT * FROM ROOM`,
     (err, results) => {
      //res.json(results)
      res.render('allSeting', {results})
      }
    ) 
}