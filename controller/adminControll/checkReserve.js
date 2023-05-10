const Connectionn = require("../../server")
module.exports = (req, res) => {
    const dayStart = req.query.startDate
    //console.log(dayStart)
    Connectionn.query(`SELECT RESERVE.day_start as Sday, RESERVE.name as nameuser, RESERVE.phon as phon, ROOM.name_room as room
    FROM RESERVE
    JOIN ROOM
    ON reserve.id_room = room.id_room
    WHERE RESERVE.day_start >= '${dayStart}' AND RESERVE.status_room = '1' 
    ORDER BY Sday`,
            (err, result) => {
                res.render('check',{result})
    }
    )
}