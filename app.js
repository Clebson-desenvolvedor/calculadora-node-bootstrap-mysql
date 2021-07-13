const express = require('express')
const mysql = require('mysql')
const ejs = require('ejs')
const bodyparser = require('body-parser')
const app = express()
const indexRouter = require('./routes/index')

app.listen('3003', function(err){
    if(err) console.log(err)
    console.log('escutando na porta 3003')
})

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', indexRouter)
app.use(express.static('public'))