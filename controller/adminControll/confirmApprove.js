const room = require("../../models/room")
module.exports = (req, res) => {
    const id = +req.params.id
    room.approveFromUser(id)
    res.redirect('/admin')

}