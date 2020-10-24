const express = require('express')
const musics =  require('../data/musics.json')
const path = require('path')
const cors = require('cors')

var server = express()
server.use(cors())
server.get("/file/:file", (req, res, next)=>{
  var file = req.params.file
  var music = musics.filter(m=> m.file==file)
  if (music.length > 0){
    m = music[0]
    res.sendFile(m.path)
  } else {
    res.status(500)
    return res
  }
})

server.get("/data/:name", (req, res, next)=>{
    var name = req.params.name
    res.sendFile(path.join(__dirname, '../data', name))
})

server.get("/preview/:name", (req, res, next)=>{
    var name = req.params.name
    res.sendFile(path.join(__dirname, '../data/preview', name))
})

console.log("Listening to port 3000...");
server.listen(3000)