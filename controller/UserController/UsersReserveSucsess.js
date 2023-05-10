const users = require('../../models/users')
module.exports = async (req, res) => {
    const id_user = req.session.id_user
    const userscustomer = req.body.userscustomer
    const phoncustomer = req.body.phoncustomer
    const dateStart = req.body.dateStart
    const dateEnd = req.body.dateEnd
    const idroom = req.body.idroom
    console.log(id_user)
    console.log(userscustomer)
    await users.reserve(id_user,userscustomer,phoncustomer,dateStart,dateEnd,idroom)
    res.redirect('/UsersHistory')
    // res.render('UsersHistory')
}