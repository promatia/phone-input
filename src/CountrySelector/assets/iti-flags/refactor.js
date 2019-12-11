const fs = require('fs')

let file = fs.readFileSync(__dirname + '/flags.css', 'utf8')

let s = file.replace(/^  height: ([0-9])*px/gm, val => {
    return `   height: ${val.substring(10).slice(0, -2) * 2}px`
}).replace(/^  width: ([0-9])*px/gm, val => {
    return `   width: ${val.substring(9).slice(0, -2) * 2}px`
}).replace(/^  background-position: -([0-9])*px/gm, val => (
    `   background-position: ${val.substring(24).slice(0, -2) * -2}px`
))

fs.writeFileSync(__dirname + '/flags2.css', s, 'utf8')