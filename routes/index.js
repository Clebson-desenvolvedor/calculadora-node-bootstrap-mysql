const conn = require('./../db')
const express = require('express')
const router = express.Router()


router.get('/', function(req, res){
    conn.query('select * from dadoscalc', (err, result) => {
        if(err) console.log(err)
        res.render('index', {
            title: 'Calculadora com Node, Bootstrap e com acesso a banco de dados',
            data: result
        })
    })
})

router.post('/save', function(req, res){

    let reqList = req.body.list
    let time = new Date()
    let hours =  `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    
    conn.query('insert into dadoscalc (op, dt_registro) values (?,?)', [reqList, hours], function(err, result){
        if(err) console.log(err)
        res.redirect('/')
        
    })
})


module.exports = router