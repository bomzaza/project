module.exports = (req, res) => {
    req.session.email = null
    req.session.id_user = null
    res.redirect('/')
}