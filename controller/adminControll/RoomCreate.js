const sharp = require("sharp")
const path = require("path")
const fs = require("fs")
const room = require("../../models/room")
const Connectionn = require("../../server")

const uploadsImg1 = require("../../utils/uploadsImg1")
const uploadsImg2 = require("../../utils/uploadsImg2")
const uploadsImg3 = require("../../utils/uploadsImg3")
const uploadsImg4 = require("../../utils/uploadsImg4")
const uploadsImg5 = require("../../utils/uploadsImg5")


module.exports = async (req, res) => {
    //console.log(req.body)
    console.log(req.files)
    
    // for (fileimg of (req.files.length)) {
    //     console.log(req.files)
    // }
    //  console.log(req.file)
         const pathImg1 = await uploadsImg1(req)
         const pathImg2 = await uploadsImg2(req)
         const pathImg3 = await uploadsImg3(req)
         const pathImg4 = await uploadsImg4(req)
         const pathImg5 = await uploadsImg5(req)

        await room.createRoom({req, pathImg1, pathImg2, pathImg3, pathImg4, pathImg5})
        res.redirect('/admin/seting')
    
}