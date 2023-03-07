const room = require('../../models/room')
const va = require('../../utils/valuequiry')
const Connectionn = require("../../server")

module.exports = async (req, res) => {
            const id = req.params.id
            //const rooms = await room.showRoomForerserve(id)
            res.render('reserveConfirm',{id})
    }
