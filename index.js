const express = require('express')
const multer  = require('multer')
const path = require('path')
const Admin = require('./router/Admin')
const Users = require('./router/Users')
const Connection = require('./server')

Connection.connect(function(err) {
    if  (err) {
        return console.error('error: ' + err.message);
    }
    
    const app = express()
    const PORT = process.env.PORT || 3000;

    
    
    app.set('view engine', 'pug') //res.render -> pug
    app.set('views', path.join(__dirname, './views'))
    app.set('x-powered-by', false)
    
    app.use(express.static(path.join(__dirname, './public')))
    app.use(express.urlencoded({ extended: false })) //reqbody
    app.use(express.json())
    
    app.use('/', Users)
    app.use('/admin', Admin)
    
    
    app.listen(PORT , (req, res) => {
        console.log(`http://localhost:${PORT}`)
    })

})
