let fs = require('fs')
let file = 'video3.mp4'


fs.stat(file, (err, stat) => {
  let total = stat.size
  let progress = 0
  let read = fs.createReadStream(file)
  let write = fs.createWriteStream('copy.mp4')
  let write2 = fs.createWriteStream('copy2.mp4')
  read.on('data', (chunk) => {
    progress += chunk.length
    console.log("J'ai lu " +  Math.round(100 * progress / total) + "%")
  })
  read.pipe(write)

  write.on('finish', () => {
    console.log('Le fichier a bien été copié')
  })
  })



 /* read.on('end', () => {
    console.log("J'ai fini de lire le fichier")
  })

})*/



/*fs.readFile('video3.mp4',(err, data) => {
  if (err) throw err
  fs.writeFile('copy.mp4', data, (err) => {
    if (err) throw err
    console.log('Le fichier a bien été copié')
  })
})*/
