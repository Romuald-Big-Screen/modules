/*let _ = require('lodash')
console.log(_.map([1, 2, 3], function(n){ return n * 3; }));*/
let map = require('lodash/map')
console.log(map([1, 2, 3], function(n){ return n * 3; }))

let fs = require('fs')
let app = require('./App').start(80)

app.on('root', function (response){
  response.write('Je suis à la racine')
})

let demo = require('./hello')

/*demo()*/
demo.hello()
demo.aurevoir()