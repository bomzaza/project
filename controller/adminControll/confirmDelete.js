const room = require("../../models/room")
module.exports = (req, res) => {
    const id = +req.params.id
    //console.log(id)
    if(id){
        room.daleteFromUser(id)
        //console.log(id)
        res.redirect('/admin')
    }
}