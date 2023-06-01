const connectionn = require('../server')

module.exports = { 
    createRoom ({req,pathImg1,pathImg2,pathImg3,pathImg4,pathImg5}) {
        connectionn.query(
            'INSERT INTO `room`( `name_room`, `detail_room`, `price_room`, `img1`,`img2`,`img3`,`img4`,`img5`, `id_room_type`) values (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [req.body.NameRoom, req.body.DetailRoom, req.body.priceRoom, pathImg1,pathImg2,pathImg3,pathImg4,pathImg5, req.body.TypeRoom],
            function(err, results) {
              //console.log('kuy',results);
            }
          )
    },
     deleteRoom (id) {
      const q = `DELETE FROM room WHERE id_room=${id}`;
      connectionn.query(q, (err, results) => {
               //console.log(results);
             }
           )
    },
    showRoom () {
      connectionn.query(`SELECT * FROM room`,
       (err, results) => {
        return results
        }
      ) 
    },
    reserve(req){
      connectionn.query(
          'INSERT INTO `reserve`( `id_user`,`name`, `phon`, `day_start`, `day_end`, `id_name_reserve`, `status_room`, `id_room`) values (?, ?, ?, ?, ?, ?, ?, ?)',
          [0,req.body.namecustomer, req.body.phoncustomer, req.body.dateStart, req.body.dateEnd, 2, 1, req.body.idroom],
          function(err, results) {
          //console.log(results);
        }
      )
    },
    approveFromUser (id) {
      connectionn.query(`UPDATE reserve SET id_name_reserve = 1 WHERE id_reserve = ${id}`,
       (err, results) => {
        return results
        }
      ) 
    },
    daleteFromUser (id) {
      connectionn.query(`DELETE FROM reserve WHERE id_reserve=${id}`,
       (err, results) => {
        return results
        }
      ) 
    }
    
}