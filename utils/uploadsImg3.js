const sharp = require("sharp")
const path = require("path")
const fs = require("fs")

module.exports = async (req, res) => {
        const m = Math.round(Math.random() * 1E9)
        const pathImg = `/uploads/${req.body.NameRoom}_3_${m}.jpg`
        await sharp (req.files[2].path) 
                .resize(500, 500)
                .jpeg({ quality:100 })
                .toFile(path.join(__dirname, `../public${pathImg}`))
        await fs.promises.unlink(req.files[2].path)   
        return pathImg

}