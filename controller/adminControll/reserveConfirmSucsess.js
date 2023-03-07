const reserve = require('../../models/room')
module.exports = (req, res) => {
    reserve.reserve(req)
    //console.log(req.body)
    res.redirect('/admin/reserve')
}