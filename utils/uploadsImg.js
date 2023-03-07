const sharp = require("sharp")
const path = require("path")
const fs = require("fs")

module.exports = async (req, res) => {
        const pathImg = `/uploads/${req.body.NameRoom}.jpg`
        await sharp (req.file.path) 
                .resize(200, 200)
                .jpeg({ quality:70 })
                .toFile(path.join(__dirname, `../public${pathImg}`))
        await fs.promises.unlink(req.file.path)   
        return pathImg

}