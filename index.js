const app = require('express')(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  rtsp = require('rtsp-ffmpeg');
server.listen(5500); //열고싶은 포트번호 입력
var uri = 'rtsp://daamdaam:daam1015@192.168.0.179:554/stream1', 
  stream = new rtsp.FFMpeg({input: uri});
io.on('connection', function(socket) {
  var pipeStream = function(data) {
    socket.emit('data', data.toString('base64'));
  };
  stream.on('data', pipeStream);
  socket.on('disconnect', function() {
    stream.removeListener('data', pipeStream);
  });
});
app.get('/', function (req, res) {
    console.log('start');
  res.sendFile(__dirname + '/index.html');
});