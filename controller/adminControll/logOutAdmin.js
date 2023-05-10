module.exports = (req, res) => {
    req.session.username = null
    res.redirect('/admin/loginAdmin')
}