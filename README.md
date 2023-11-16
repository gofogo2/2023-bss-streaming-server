# 2023-bss-streaming-server

npm i 로 설치 후

node_modules -> node-rtsp-stream -> mpeg1muxer.js

아래 객체 수정

  this.spawnOptions = [
    // "-i",
    // this.url,
    // '-f',
    // 'mpegts',
    // '-codec:v',
    // 'mpeg1video',
    // // additional ffmpeg options go here
    // ...this.additionalFlags,
    // '-'
    
    "-rtsp_transport", "tcp", "-i",
    this.url,
    '-f',
    'mpeg1video',
    //additional ffmpeg options go here
    ...this.additionalFlags,
    '-'
]
