const room = require('../../models/room')

module.exports = (req, res) => {
    const id = req.params.id
    room.deleteRoom(id)
    res.redirect('/admin/seting')
}