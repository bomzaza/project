const sharp = require("sharp")
const path = require("path")
const fs = require("fs")

module.exports = async (req, res) => {
        const m = Math.round(Math.random() * 1E9)
        const pathImg = `/uploads/${req.body.NameRoom}_5_${m}.jpg`
        await sharp (req.files[4].path) 
                .resize(500, 500)
                .jpeg({ quality:100 })
                .toFile(path.join(__dirname, `../public${pathImg}`))
        await fs.promises.unlink(req.files[4].path)   
        return pathImg

}