module.exports = (req, res) => {
    res.render('UsersIndex', {email: req.session.email ,id: req.session.id_user, name_user: req.session.name_user})
}