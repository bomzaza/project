const sharp = require("sharp")
const path = require("path")
const fs = require("fs")
const room = require("../../models/room")
const Connectionn = require("../../server")
const uploadpath = require("../../utils/uploadsImg")


module.exports = async (req, res) => {
    // console.log(req.body)
    // console.log(req.file.path)
        const pathImg = await uploadpath(req)
        await room.createRoom({req, pathImg})
        res.redirect('/admin/seting')
    
}